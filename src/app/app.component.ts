import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
//import { SafeUrlPipe } from './pipes/safe-url.pipe';

interface CarouselItem {
  title: string;
  image: string;
  description: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeTab: string = 'user-experience';
  userExperienceItems: CarouselItem[] = [
    {
      title: 'Design System: A Unified Approach to UI/UX',
      image: './icon1.png',
      description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf', // Replace with your S3 PDF link
    },
    {
      title: 'Style Guide: Consistency in Design & Experience',
      image: './icon2.png',
      description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Interaction and Motion Design',
      image: './icon3.png',
      description: 'Enhances user engagement with smooth animations and transitions.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './icon1.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './icon2.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './icon3.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];

  
  EssentialsUIRepository: CarouselItem[] = [
    {
      title: 'Design System: A Unified Approach to UI/UX',
      image: './best-practices-1.png',
      description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf', // Replace with your S3 PDF link
    },
    {
      title: 'Style Guide: Consistency in Design & Experience',
      image: './best-practices-2.png',
      description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Interaction and Motion Design',
      image: './best-practices-3.png',
      description: 'Enhances user engagement with smooth animations and transitions.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './best-practices-4.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './best-practices-1.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './best-practices-2.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];

  userInterfaceItems: CarouselItem[] = [
    {
      title: 'Updated Toolkit with Advanced Branding',
      image: './uI-repository-1.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Essential UI Patterns and Components',
      image: './ui-repository-2.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'UI Guidelines and Best Practices',
      image: './ui-repository-3.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Updated evolving UI trends',
      image: './ui-repository-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];


  Components: CarouselItem[] = [
    {
      title: 'Updated Toolkit with Advanced Branding',
      image: './Components-1.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Essential UI Patterns and Components',
      image: './Components-2.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'UI Guidelines and Best Practices',
      image: './Components-3.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Updated evolving UI trends',
      image: './Components-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];
   // Debug method to log tab changes
   onTabChange(tab: string) {
    console.log('Switching to tab:', tab);
    this.activeTab = tab;
  }
}