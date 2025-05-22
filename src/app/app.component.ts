import { Component, HostListener } from '@angular/core';
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
      image: './image-place-holder.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf', // Replace with your S3 PDF link
    },
    {
      title: 'Style Guide: Consistency in Design & Experience',
      image: './image-place-holder.png',
      description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Interaction and Motion Design',
      image: './image-place-holder.png',
      description: 'Enhances user engagement with smooth animations and transitions.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './image-place-holder.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './image-place-holder.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Stay updated with evolving UX trends',
      image: './image-place-holder.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];

  
  ReusableComponents: CarouselItem[] = [
    {
      title: ' Angular Reusable Components',
      image: './ReusableComponents/Angular-Reusable-Components.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://angular-components.evokeapps.com/dashboard', 
    },
    
    {
      title: 'React Reusable Components',
      image: './ReusableComponents/React-Reusable-Components.png',
      description: 'Enhances user engagement with smooth animations and transitions.',
      pdfUrl: 'https://react-components.evokeapps.com/',
    },
  
    {
      title: 'Vue Reusable Components',
      image: './ReusableComponents/Vue-Reusable-Components.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://vue-components.evokeapps.com/',
    },
    {
      title: 'UI Reusable Components',
      image: './ReusableComponents/UI-Reusable-Components.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://ui-components.evokeapps.com/',
    },
  ];

  userInterfaceItems: CarouselItem[] = [
    {
      title: 'Best Practices for Clean and High-Performance Angular Application',
      image: './image-place-holder.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Angular-Applications-v1.pdf',
    },
    {
      title: 'Getting the Most Out of React 19: New Features and Best Practices',
      image: './image-place-holder.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Getting-the-Most-Out-of-React-19-New-Features-and-Best-Practices-v1.pdf',
    },
    {
      title: 'UI Guidelines and Best Practices',
      image: './image-place-holder.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
    {
      title: 'Updated evolving UI trends',
      image: './image-place-holder.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://dashboard-ui-ux-pdfs.s3.ap-south-1.amazonaws.com/test1.pdf',
    },
  ];


  BestPractices: CarouselItem[] = [
    {
      title: 'Best Practices for Clean and High-Performance Angular Application',
      image: './bestpractices/Angular-Best-ractices.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Angular-Applications-v1.pdf',
    },
  
    {
      title: 'Best Practices for Clean and High-Performance React Applications',
      image: './bestpractices/React-Best-Practices.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-React-Applications-v1.pdf',
    },
  
    {
      title: 'Best Practices for Clean and High-PerformanceVue Applications',
      image: './bestpractices/Vue-Best Practices.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Vue-Applications-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance JavaScript Application',
      image: './bestpractices/JavaScript-Best-Practices.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-JavaScript-Applications-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance HTML Applications',
      image: './bestpractices/HTML-Best-ractices.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-HTML-Applications_v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance CSS Applications',
      image: './bestpractices/CSS-Best-Practices.png',
      description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-CSS-Applications-v1.pdf',
    },
    {
      title: 'Implementing Web Accessibility WCAG 2.1 AA and AAA levels',
      image: './bestpractices/Accessibility-Best-Practices.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Implementing-Web-Accessibility-WCAG2.1-AA-AAA-levels-v1.pdf', 
    },

  ];

  CodeReview: CarouselItem[] = [
    {
      title: 'Code Review Handbook forAngular Developers',
      image: './codeReviewFiles/Angular-Code-Review.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Angular-Developers.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './codeReviewFiles/React-Code-Review.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './codeReviewFiles/Vue-Code-Review.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './codeReviewFiles/JavaScript-Code-Review.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers.pdf',
    },
    
  ];

  Components2: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './image-place-holder.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './image-place-holder.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './image-place-holder.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './image-place-holder.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
  ];

  
  VersionUpgrade: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './version-upgrade-process/Angular-Version-Upgrade-Process.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
    },
    
  ];

  UnitTestingDocuments: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './image-place-holder.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './image-place-holder.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './image-place-holder.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './image-place-holder.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
  ];

  SonarQubeconfiguration: CarouselItem[] = [
    {
      title: 'Sonar Qube Setup and Configuration forAngular Applications',
      image: './SonarQube/Angular-SonarQube.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/SonarQube-Setup-and-Configuration-for-Angular-Applications.pdf',
    },
  
  ];

  CodePipeline: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './image-place-holder.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
    },
    {
      title: 'Code Review Handbook forReact Developer',
      image: './image-place-holder.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook forVue Developers',
      image: './image-place-holder.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
    },
    {
      title: 'Code Review Handbook for JavaScript Developers',
      image: './image-place-holder.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
    },
  ];

 
  NewFeatures: CarouselItem[] = [
    {
      title: 'Getting the Most Out of Angular 19: New Features and Best Practices',
      image: './new-features/Angular-New-Features.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Getting-the-Most-Out-of-Angular-19-New-Features-and-Best-Practices-v1.pdf',
    },
    {
      title: 'Getting the Most Out of React 19: New Features and Best Practices',
      image: './new-features/React-New-Features.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Getting-the-Most-Out-of-React-19-New-Features-and-Best-Practices-v1.pdf',
    }
  
   
  ];

   // Debug method to log tab changes
   onTabChange(tab: string) {
    console.log('Switching to tab:', tab);
    this.activeTab = tab;
  }

  showStickyTabs = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const banner = document.getElementById('banner');
    if (banner) {
      const bannerBottom = banner.getBoundingClientRect().bottom;
      this.showStickyTabs = bannerBottom <= 0;
    }
  }

  scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}