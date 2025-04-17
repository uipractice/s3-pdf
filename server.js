import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());

// Initialize S3 client
const s3 = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// In-memory cache for PDFs
let archivedPdfs = [];
let pdfCache = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // Cache for 5 minutes

// Helper function to fetch PDFs from S3
async function fetchPdfs() {
  const startTime = Date.now();
  console.log('Fetching PDFs from S3');
  try {
    const command = new ListObjectsV2Command({
      Bucket: 'dashboard-ui-ux-pdfs',
      Prefix: '',
      MaxKeys: 10, // Further reduced
    });
    const { Contents } = await s3.send(command);
    console.log(`S3 ListObjects took ${Date.now() - startTime}ms, found ${Contents?.length || 0} objects`);

    const currentPdfs = Contents?.filter((file) => file.Key?.endsWith('.pdf')) || [];
    console.log(`Filtered ${currentPdfs.length} PDFs`);

    const pdfKeys = currentPdfs.map((file) => file.Key);

    // Update archived PDFs
    const previouslySeen = archivedPdfs.map((pdf) => pdf.key);
    const newlyDeleted = previouslySeen.filter((key) => !pdfKeys.includes(key));
    archivedPdfs = archivedPdfs
      .filter((pdf) => pdfKeys.includes(pdf.key))
      .concat(newlyDeleted.map((key) => ({ key, title: key.split('/').pop() })));

    // Generate signed URLs
    const pdfs = await Promise.all(
      currentPdfs.map(async (file) => {
        const urlStartTime = Date.now();
        const signedUrl = await getSignedUrl(
          s3,
          new GetObjectCommand({ Bucket: 'dashboard-ui-ux-pdfs', Key: file.Key }),
          { expiresIn: 3600 }
        );
        console.log(`Signed URL for ${file.Key} took ${Date.now() - urlStartTime}ms`);
        return { title: file.Key.split('/').pop(), downloadUrl: signedUrl };
      })
    );

    return pdfs;
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    throw error;
  }
}

// API endpoint to fetch PDFs
app.get('/api/pdfs', async (req, res) => {
  const startTime = Date.now();
  console.log('Hit /api/pdfs endpoint');
  try {
    if (pdfCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
      console.log('Serving PDFs from cache');
    } else {
      console.log('Cache miss or expired, fetching new PDFs');
      pdfCache = await fetchPdfs();
      cacheTimestamp = Date.now();
    }

    const pdfs = pdfCache;

    const userExperienceBase = [
      {
        title: 'Design System: A Unified Approach to UI/UX',
        image: 'icon1.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'Style Guide: Consistency in Design & Experience',
        image: 'icon2.png',
        description: 'Establishes best practices for layouts, spacing, iconography, and usability to enhance brand identity and user experience.',
      },
      {
        title: 'Interaction and Motion Design',
        image: 'icon3.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'Stay updated with evolving UX trends',
        image: 'icon1.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
    ];

    const userInterfaceBase = [
      {
        title: 'Updated Toolkit with Advanced Branding',
        image: 'icon1.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'Essential UI Patterns and Components',
        image: 'icon2.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'UI Guidelines and Best Practices',
        image: 'icon3.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'Updated evolving UI trends',
        image: 'icon1.png',
        description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
    ];

    const userExperienceItems = userExperienceBase.map((item, index) => ({
      ...item,
      pdfUrl: pdfs[index % pdfs.length]?.downloadUrl || '',
    }));

    while (userExperienceItems.length < 8) {
      userExperienceItems.push(...userExperienceItems.slice(0, 8 - userExperienceItems.length));
    }

    const userInterfaceItems = userInterfaceBase.map((item, index) => ({
      ...item,
      pdfUrl: pdfs[(index + userExperienceBase.length) % pdfs.length]?.downloadUrl || '',
    }));

    while (userInterfaceItems.length < 8) {
      userInterfaceItems.push(...userInterfaceItems.slice(0, 8 - userInterfaceItems.length));
    }

    pdfs.forEach((pdf, index) => {
      const userExperienceItem = {
        title: pdf.title,
        image: 'https://via.placeholder.com/300x200?text=PDF+Document',
        description: 'Dynamically uploaded PDF',
        pdfUrl: pdf.downloadUrl,
      };
      const userInterfaceItem = {
        title: pdf.title,
        image: 'https://via.placeholder.com/300x200?text=PDF+Document',
        description: 'Dynamically uploaded PDF',
        pdfUrl: pdf.downloadUrl,
      };

      if (index % 2 === 0) {
        userExperienceItems.push(userExperienceItem);
      } else {
        userInterfaceItems.push(userInterfaceItem);
      }
    });

    const tabData = {
      userExperience: userExperienceItems,
      userInterface: userInterfaceItems,
      archived: archivedPdfs.map((pdf) => ({ title: pdf.title })),
    };

    console.log(`/api/pdfs completed in ${Date.now() - startTime}ms`);
    res.json(tabData);
  } catch (error) {
    console.error('Error in /api/pdfs:', error);
    res.status(500).json({ error: 'Error fetching PDFs' });
  }
});

// Serve Angular static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist/s3-pdf');

app.use(express.static(distPath, {
  maxAge: '1y',
  etag: false,
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Angular SPA fallback route (only for non-API routes)
app.get(/^\/(?!api\/).*$/, (req, res) => {
  console.log(`SPA fallback for: ${req.path}`);
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).send('Error loading application');
    }
  });
});

// Export for Vercel serverless
export default serverless(app);