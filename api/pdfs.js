import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

let archivedPdfs = [];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

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
      const dynamicItem = {
        title: pdf.title,
        image: 'https://via.placeholder.com/300x200?text=PDF+Document',
        description: 'Dynamically uploaded PDF',
        pdfUrl: pdf.downloadUrl,
      };
      if (index % 2 === 0) {
        userExperienceItems.push(dynamicItem);
      } else {
        userInterfaceItems.push(dynamicItem);
      }
    });

    const tabData = {
      userExperience: userExperienceItems,
      userInterface: userInterfaceItems,
      archived: archivedPdfs.map((pdf) => ({ title: pdf.title })),
    };

    res.status(200).json(tabData);
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    res.status(500).json({ error: 'Error fetching PDFs' });
  }
}
