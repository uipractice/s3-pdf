import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
//import { SafeUrlPipe } from './pipes/safe-url.pipe';

interface CarouselItem {
  title: string;
  image: string;
  description: string;
  pdfUrl: string;
  requiresAccess?: boolean;
  mailtoLink?: string;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
activeStickyTab: any;
scrollToSection(arg0: string) {
throw new Error('Method not implemented.');
}
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

   latestTrends: CarouselItem[] = [
    {
      title: 'Smashing Magazine - For Designers And Developers',
      image: './latest-trends/smashing-magazine.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://www.smashingmagazine.com/',
    },
    {
      title: 'Nielsen Norman Group (NNg) UX Podcast',
      image: './latest-trends/nng.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://www.nngroup.com/',
    },
    {
      title: 'UX Design - Definition & Guide',
      image: './latest-trends/ux-design.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://uxdesign.cc/',
    },
    {
      title: 'Awwwards - Best Web Design Trends',
      image: './latest-trends/awwwards.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://www.awwwards.com/',
    },
     {
      title: 'Muzli - Design inspiration hub',
      image: './latest-trends/muzil.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://muz.li/',
    },
     {
      title: 'Adobe XD Design Tool: A Brief Overview',
      image: './latest-trends/adobe-xd-Ideas.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://adobexdplatform.com/',
    },
     {
      title: 'UX Planet - One stop resource for everything r...',
      image: './latest-trends/ux-planet.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://uxplanet.org/',
    },
      {
      title: 'How to Get Featured on Behance: Insights and Tips',
      image: './latest-trends/behance.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://www.behance.net/',
    },
  ];

  userInterfaceItems: CarouselItem[] = [
    {
      title: 'Library of shared design elements and rules.',
      image: './uxresources/design-systems.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://designsystemsrepo.com/',
    },
    {
      title: 'Get Inspired by Real World UI from Leading Apps. ',
      image: './uxresources/Mobbin.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://mobbin.com/browse/ios/apps',
    },
    {
      title: 'Explore Work from the Most Talented Designers.',
      image:'./uxresources/drillle.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://dribbble.com/',
    },
    {
      title: 'Find & Download Free Graphic Resources. ',
      image: './uxresources/freepik.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://www.freepik.com/',
    },
      {
      title: 'Download Free Icons and Stickers for your Projects. ',
      image: './uxresources/flaticon.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://www.flaticon.com/',
    },
  ];

  BrandDesignHub: CarouselItem[] = [
    {
      title: 'Setting the standard for how our brand shows up.',
      image: './branddesignhub/brand-guidelines.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UX/Evoke-Brand-Guidelines.pdf',
    },
    {
      title: 'One consistent system to simplify product design.',
      image: './branddesignhub/design-system.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UX/Evoke-Design-System.pdf',
    },
      {
      title: 'Using right tools at each stage of design process.',
      image: './branddesignhub/ux-resources.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UX/UX-Tools.pdf',
    },
  ];


  BestPractices: CarouselItem[] = [
    {
      title: 'Best Practices for Clean and High-Performance Angular Applications',
      image: './bestpractices/Angular-best-practices.png',
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
      title: 'Best Practices for Clean and High-Performance Vue Applications',
      image: './bestpractices/Vue-Best-Practices.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-Vue-Applications-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance JavaScript Applications',
      image: './bestpractices/JavaScript-Best-Practices.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Clean-and-High-Performance-JavaScript-Applications-v1.pdf',
    },
       {
      title: 'Building a Clean and High-Performance TypeScript Applications',
      image: './bestpractices/TypeScript-BestPractices.png',
      description: 'Keeps your designs aligned with the latest UX innovations.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Buildinga-Clean-and-High-PerformanceTypeScript-Application-v1.pdf',
    },
    {
      title: 'Best Practices for Clean and High-Performance HTML Applications',
      image: './bestpractices/HTML-best-practices.png',
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
{
      title: 'Best Practices For Optimising Images in Web Applications',
      image: './bestpractices/Optimising-images-Best-Practices.png',
      description: 'It ensures design consistency, clarity, defines principles, colors.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Best-Practices-for-Optimizing-Images-in-Web-Applications-v1.pdf', 
    }

  ];

  CodeReview: CarouselItem[] = [
    {
      title: 'Code Review Handbook for Angular Developers',
      image: './codeReviewFiles/Angular-Code-Review.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Angular-Developers.pdf',
    },
    {
      title: 'Code Review Handbook for React Developers',
      image: './codeReviewFiles/React-Code-Review.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers.pdf',
    },
  
    {
      title: 'Code Review Handbook for Vue Developers',
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
      title: 'Code Review Handbook for React Developer',
      image: './image-place-holder.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
    },
  
    {
      title: 'Code Review Handbook for Vue Developers',
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
UXPerformanceLog: CarouselItem[] = [
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: './UxPerformanceLog/case-study.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: '',
      requiresAccess: true,
      mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - Angular',
     },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: './UxPerformanceLog/design-review.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: '',
     requiresAccess: true,      
      mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - React',

    },
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: './UxPerformanceLog/feedback.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: '',
      requiresAccess: true,       
          mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - Vue',
     
    }
  ];

  TrainingSession: CarouselItem[] = [
    {
      title: 'Kindly Provide Access to Angular Training Recordings',
      image: './training-session/angular-training.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: '',
      requiresAccess: true,
      mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - Angular',
     },
    {
      title: 'Kindly Provide Access to React Training Recordings',
      image: './training-session/react-training.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: '',
     requiresAccess: true,      
      mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - React',

    },
    {
      title: 'Kindly Provide Access to Vue Training Recordings.',
      image: './training-session/vue-training.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: '',
      requiresAccess: true,       
          mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - Vue',
     
    },
     {
      title: 'Kindly Provide Access to NodeJs Training Recordings',
      image: './training-session/node-training.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: '',
     requiresAccess: true,      
    mailtoLink: 'mailto:uiuxpractice@evoketechnologies.com?subject=Request Access - NodeJs',
    }
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
      title: 'Angular Unit Testing A Complete Guide',
      image: './unit-testing/angular-unit-testing.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Unit-Testing-A-Complete-Guide-v1.pdf',
    },
    {
      title: 'React Unit Testing A Complete Guide',
      image: './unit-testing/react-unit-testing.png',
      description: 'Provides tools for consistent branding across UI elements.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/React-Unit-Testing-A-Complete-Guide-v1.pdf',
    },
  
    
    {
      title: 'Vue Unit Testing A Complete Guide',
      image: './unit-testing/vue-unit-testing.png',
      description: 'Stay ahead with the latest UI design trends.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Vue-Unit-Testing-A-Complete-Guide-v1.pdf',
    },
    {
      title: 'JavaScript Unit Testing A Complete Guide',
      image: './unit-testing/node-unit-testing.png',
      description: 'Best practices for creating intuitive user interfaces.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/JavaScript-Unit-Testing-A-Complete-Guide-v1.pdf',
    },
  ];

  // DesignPatterns: CarouselItem[] = [
  //   {
  //     title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
  //     image: './Design-patterns/angular-design.png',
  //     description: 'Standardized components for rapid UI development.',
  //     pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Angular-Upgrade-Path-Ensuring-Smooth-Transitions-Across-Versions-v1.pdf',
  //   },
  //   {
  //     title: 'Code Review Handbook for React Developers',
  //     image: './Design-patterns/react-design.png',
  //     description: 'Provides tools for consistent branding across UI elements.',
  //     pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-React-Developers_v1.pdf',
  //   },
  
  //   {
  //     title: 'Code Review Handbook for Node Developers',
  //     image: './Design-patterns/vue-design.png',
  //     description: 'Best practices for creating intuitive user interfaces.',
  //     pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-Vue-Developers-v1.pdf',
  //   },
  //   {
  //     title: 'Code Review Handbook for Vue Developers',
  //     image: './Design-patterns/javascript-design.png',
  //     description: 'Stay ahead with the latest UI design trends.',
  //     pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/Code-Review-Handbook-for-JavaScript-Developers-v1.pdf',
  //   },
  // ];

  SonarQubeconfiguration: CarouselItem[] = [
    {
      title: 'SonarQube Setup and Configuration for Angular Applications',
      image: './SonarQube/Angular-SonarQube.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: 'https://evoke-documentation-hub.s3.ap-south-1.amazonaws.com/UI-Practice/UI/SonarQube-Setup-and-Configuration-for-Angular-Applications.pdf',
    },
  
  ];

  CodePipeline: CarouselItem[] = [
    {
      title: 'Angular Upgrade Path: Ensuring Smooth Transitions Across Versions',
      image: './ci-cd-pipeline.png',
      description: 'Standardized components for rapid UI development.',
      pdfUrl: '#',
    }
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


  @ViewChild('mainTabContainer', { static: false }) mainTabContainer!: ElementRef;

   mainIndicatorStyle: any = {};


onTabChange(tab: string, event?: MouseEvent) {
  //console.log('Switching to tab:', tab);
  this.activeTab = tab;

  if (event) {
    const el = event.currentTarget as HTMLElement;
    this.mainIndicatorStyle = {
      width: `${el.offsetWidth}px`,
      left: `${el.offsetLeft}px`
    };
  }
     if (tab === 'user-interface') {
    this.activeTab1 = ''; 
  } else if (tab === 'user-experience') {
    this.activeTab2 = '';
  }
  
}
ngAfterViewInit() {
  // Make sure the background starts in the right place
  setTimeout(() => this.updateMainIndicator(), 0);
}

updateMainIndicator() {
  const el = this.mainTabContainer.nativeElement;
  const active = el.querySelector('button.active') as HTMLElement;
  if (active) {
    this.mainIndicatorStyle = {
      width: `${active.offsetWidth}px`,
      left: `${active.offsetLeft}px`
    };
  }
}

@ViewChild('tabScrollContainer1', { static: false }) tabScrollContainer1!: ElementRef;
  @ViewChild('tabScrollContainer2', { static: false }) tabScrollContainer2!: ElementRef;

  tabList = [
    { id: 'latest-trends', label: 'Latest Trends' },
    { id: 'ux-resources', label: 'UX Resources' },
    { id: 'brand-design-hub', label: 'Brand & Design Hub' },
    //  { id: 'ux-performance-log', label: 'UX Performance Log' },
    // { id: 'ux-documents', label: 'UX Documents' },
    // { id: 'monthly-ux-meetings', label: 'Monthly UX Meetings' },
  ];

  secondTabList = [
    { id: 'test1', label: 'Best Practices' },
    { id: 'test2', label: 'Code Review Handbook' },
    { id: 'test3', label: 'Reusable Components' },
    { id: 'test4', label: 'New Features' },
    { id: 'test5', label: 'Version Upgrade' },
    // { id: 'test6', label: 'Design Patterns' },
    { id: 'test7', label: 'Unit Testing' },
    { id: 'test8', label: 'Training Session Recordings' },
    { id: 'test9', label: 'SonarQube Configuration' },
    // { id: 'test10', label: 'CI-CD Pipeline' },
  ];

  activeTab1 = '';
  activeTab2 = '';
  showStickyTabs = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const banner = document.getElementById('banner');
    if (banner) {
      const bannerBottom = banner.getBoundingClientRect().bottom;
      this.showStickyTabs = bannerBottom !== 0;
    }
  }

 onStickyTabClick(tabId: string, tabGroup: 'tab1' | 'tab2'): void {
  const section = document.getElementById(tabId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (tabGroup === 'tab1') {
    this.activeTab1 = tabId;
    this.activeTab2 = '';
  } else {
    this.activeTab2 = tabId;
    this.activeTab1 = '';
  }

  
}


  leftDisabledTab1 = true;
rightDisabledTab1 = false;

leftDisabledTab2 = true;
rightDisabledTab2 = false;

scrollTabs(direction: 'left' | 'right', group: 'tab1' | 'tab2'): void {
  const scrollContainer = group === 'tab1' 
    ? this.tabScrollContainer1.nativeElement 
    : this.tabScrollContainer2.nativeElement;

  const scrollAmount = 150;
  const delta = direction === 'left' ? -scrollAmount : scrollAmount;

  scrollContainer.scrollBy({
    left: delta,
    behavior: 'smooth',
  });

  // Wait for scroll to complete then update button state
  setTimeout(() => this.updateScrollButtons(group), 300);
}
updateScrollButtons(group: 'tab1' | 'tab2'): void {
    const scrollContainer = group === 'tab1'
      ? this.tabScrollContainer1.nativeElement
      : this.tabScrollContainer2.nativeElement;

    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const currentScrollLeft = scrollContainer.scrollLeft;

    const isAtStart = currentScrollLeft <= 0;
    const isAtEnd = currentScrollLeft >= maxScrollLeft - 1;

    if (group === 'tab1') {
      this.leftDisabledTab1 = isAtStart;
      this.rightDisabledTab1 = isAtEnd;
    } else {
      this.leftDisabledTab2 = isAtStart;
      this.rightDisabledTab2 = isAtEnd;
    }
  }


  
}