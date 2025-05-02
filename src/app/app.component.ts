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
      description: 'It ensures design consistency, clarity, defines principles, colors.',
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
      title: ' Angular Reusable Components',
      image: './angular-19.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://angular-components.evokeapps.com/dashboard', 
    },
    
    {
      title: 'React Reusable Components',
      image: './Components-2.png',
      description: 'Enhances user engagement with smooth animations and transitions.',
      pdfUrl: 'https://react-components.evokeapps.com/',
    },
  
    {
      title: 'Vue Reusable Components',
      image: './Components-4.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://vue-components.evokeapps.com/',
    },
    {
      title: 'UI Reusable Components',
      image: './best-practices-1.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://ui-components.evokeapps.com/',
    },
  ];

  userInterfaceItems: CarouselItem[] = [
    {
      title: 'Best Practices for Clean and High-Performance Angular Application',
      image: './uI-repository-1.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Angular-Applications-v1.pdf',
    },
    {
      title: 'Getting the Most Out of React 19: New Features and Best Practices',
      image: './ui-repository-2.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Getting-the-Most-Out-of-React-19-New-Features-and-Best-Practices-v1.pdf',
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
      title: 'Best Practices for Clean and High-Performance Angular Application',
      image: './uI-repository-1.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Angular-Applications-v1.pdf',
    },
  
    {
      title: 'Best Practices for Clean and High-Performance React Applications',
      image: './ui-repository-2.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-React-Applications-v1',
    },
  
    {
      title: 'Best Practices for Clean and High-PerformanceVue Applications',
      image: './Components-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Vue-Applications-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance JavaScript Application',
      image: './best-practices-4.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-JavaScript-Applications-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance HTML Applications',
      image: './html-practices.jpg',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-HTML-Applications_v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance CSS Applications',
      image: './best-practices-2.png',
      description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-CSS-Applications-v1.pdf',
    },
    {
      title: 'Implementing Web Accessibility WCAG 2.1 AA and AAA levels',
      image: './best-practices-1.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Implementing-Web-Accessibility-WCAG 2.1-AA-AAA-levels.pdf', // Replace with your S3 PDF link
    },

  ];

  Components1: CarouselItem[] = [
    {
      title: 'Code Review Handbook forAngular Developers',
      image: './angular-19.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Angular-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './Components-2.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './Components-4.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './best-practices-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
    
  ];

  Components2: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './angular-19.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './Components-2.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './Components-4.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './best-practices-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
  ];

  Components3: CarouselItem[] = [
    {
      title: 'Getting the Most Out of Angular 19: New Features and Best Practices',
      image: './angular-19.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/Getting-the-Most-Out-of-Angular-19-New-Features-and-Best-Practices-v1.pdf',
    },
    {
      title: 'Getting the Most Out of React 19: New Features and Best Practices',
      image: './Components-2.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Getting-the-Most-Out-of-React-19-New-Features-and-Best-Practices-v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './Components-4.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './best-practices-4.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
  ];

   // Debug method to log tab changes
   onTabChange(tab: string) {
    console.log('Switching to tab:', tab);
    this.activeTab = tab;
  }
}