// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

dotenv.config();
const app = express();
app.use(cors({
  origin: ['http://localhost:4200', 
    'https://s3-pdf.vercel.app'],
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));
const PORT = process.env.PORT || 4000;

const s3 = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

let archivedPdfs = [];

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the s3-pdf API. Use /api/pdfs to fetch PDF data.' });
});

app.get('/api/pdfs', async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: 'dashboard-ui-ux-pdfs',
      Prefix: '',
    });
    const { Contents } = await s3.send(command).catch((err) => {
      throw new Error(`S3 ListObjectsV2 failed: ${err.message}`);
    });

    const currentPdfs = Contents?.filter((file) => file.Key?.endsWith('.pdf')) || [];
    const pdfKeys = currentPdfs.map((file) => file.Key);

    const previouslySeen = archivedPdfs.map((pdf) => pdf.key);
    const newlyDeleted = previouslySeen.filter((key) => !pdfKeys.includes(key));
    archivedPdfs = archivedPdfs
      .filter((pdf) => pdfKeys.includes(pdf.key))
      .concat(newlyDeleted.map((key) => ({ key, title: key.split('/').pop() })));

    const pdfs = await Promise.all(
      currentPdfs.map(async (file) => {
        try {
          const signedUrl = await getSignedUrl(
            s3,
            new GetObjectCommand({ Bucket: 'dashboard-ui-ux-pdfs', Key: file.Key }),
            { expiresIn: 3600 }
          );
          return { title: file.Key.split('/').pop(), downloadUrl: signedUrl };
        } catch (err) {
          console.error(`Error generating signed URL for ${file.Key}:`, err);
          return null;
        }
      })
    ).then((results) => results.filter((pdf) => pdf !== null));

    const userExperienceBase = [
      {
        title: 'Design System: A Unified Approach to UI/UX',
        image: 'https://via.placeholder.com/300x200?text=Design+System',
        description: 'Ensures design consistency, clarity, defines principles, colors, typography, and components.',
      },
      {
        title: 'Style Guide: Consistency in Design & Experience',
        image: 'https://via.placeholder.com/300x200?text=Style+Guide',
        description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      },
      {
        title: 'Interaction and Motion Design',
        image: 'https://via.placeholder.com/300x200?text=Interaction+Design',
        description: 'Enhances user engagement with smooth animations and transitions.',
      },
      {
        title: 'Stay updated with evolving UX trends',
        image: 'https://via.placeholder.com/300x200?text=UX+Trends',
        description: 'Keeps your designs aligned with the latest UX innovations.',
      },
    ];

    const userInterfaceBase = [
      {
        title: 'Updated Toolkit with Advanced Branding',
        image: 'https://via.placeholder.com/300x200?text=Toolkit',
        description: 'Provides tools for consistent branding across UI elements.',
      },
      {
        title: 'Essential UI Patterns and Components',
        image: 'https://via.placeholder.com/300x200?text=UI+Patterns',
        description: 'Standardized components for rapid UI development.',
      },
      {
        title: 'UI Guidelines and Best Practices',
        image: 'https://via.placeholder.com/300x200?text=Guidelines',
        description: 'Best practices for creating intuitive user interfaces.',
      },
      {
        title: 'Updated evolving UI trends',
        image: 'https://via.placeholder.com/300x200?text=UI+Trends',
        description: 'Stay ahead with the latest UI design trends.',
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

    res.json(tabData);
  } catch (error) {
    console.error('Error in /api/pdfs:', error);
    res.status(500).json({ error: 'Failed to fetch PDFs', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});