import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import path from 'path';
import { fileURLToPath } from 'url';

// const express = require ('express');
// const cors = require ('cors');
// const dotenv = require ('dotenv');
// const { S3Client, ListObjectsV2Command, GetObjectCommand } = require ('@aws-sdk/client-s3');
// const { getSignedUrl } =require ('@aws-sdk/s3-request-presigner');
// const path = require ('path');
// const { fileURLToPath } = require ('url');


dotenv.config();
const app = express();
app.use(cors());
//const PORT = process.env.PORT || 4000;

const s3 = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

let archivedPdfs = [];

app.get('/api/pdfs', async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: 'dashboard-ui-ux-pdfs',
      Prefix: '',
    });
    const { Contents } = await s3.send(command);

    const currentPdfs = Contents?.filter((file) => file.Key?.endsWith('.pdf')) || [];
    const pdfKeys = currentPdfs.map((file) => file.Key);

    const previouslySeen = archivedPdfs.map((pdf) => pdf.key);
    const newlyDeleted = previouslySeen.filter((key) => !pdfKeys.includes(key));
    archivedPdfs = archivedPdfs
      .filter((pdf) => pdfKeys.includes(pdf.key))
      .concat(newlyDeleted.map((key) => ({ key, title: key.split('/').pop() })));

    const pdfs = await Promise.all(
      currentPdfs.map(async (file) => {
        const signedUrl = await getSignedUrl(
          s3,
          new GetObjectCommand({ Bucket: 'dashboard-ui-ux-pdfs', Key: file.Key }),
          { expiresIn: 3600 }
        );
        return { title: file.Key.split('/').pop(), downloadUrl: signedUrl };
      })
    );

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

    // Assign PDFs to base items and ensure at least 8 items for sliding
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

    // Add dynamically uploaded PDFs as new items
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
    console.error(error);
    res.status(500).json({ error: 'Error fetching PDFs' });
  }
});
// Serve Angular static files from dist/s3-pdf
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist/s3-pdf');

app.use(express.static(distPath));

// Angular fallback route (for SPA support)
app.get('*', (req, res) => {
 // res.sendFile(path.join(distPath, 'index.html'));

 const indexPath = path.join(distPath, 'index.html');
 res.sendFile(indexPath, (err) => {
   if (err) {
     console.error('Error sending index.html:', err);
     res.status(500).send('Error loading application');
   }
 });
});

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// if (!process.env.VERCEL_ENV) {
  
//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
//   });
// }

if (process.env.NODE_ENV === 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running in production at http://localhost:${PORT}`);
  });
}

export default serverless(app);
