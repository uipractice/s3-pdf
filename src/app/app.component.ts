// src/app/app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent,CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activeTab: string = 'user-experience';
  userExperienceItems: any[] = [];
  userInterfaceItems: any[] = [];
  loading: boolean = false;
  private pollingSubscription: Subscription | null = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.fetchPdfs();
    this.pollingSubscription = interval(30000).subscribe(() => {
      this.fetchPdfs();
    });
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  fetchPdfs() {
    this.loading = true;
    this.http.get('http://localhost:4000/api/pdfs').subscribe({
      next: (data: any) => {
        this.userExperienceItems = data.userExperience || [];
        this.userInterfaceItems = data.userInterface || [];

        if (!this.userExperienceItems.length) {
          console.warn('User Experience array is empty, using fallback data');
          this.userExperienceItems = [
            {
              title: 'Design System: A Unified Approach to UI/UX',
              image: 'https://via.placeholder.com/300x200?text=Design+System',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Style Guide: Consistency in Design & Experience',
              image: 'https://via.placeholder.com/300x200?text=Style+Guide',
              description: 'Establishes best practices for layouts, spacing, iconography, and usability to enhance brand identity and user experience.',
              pdfUrl: '',
            },
            {
              title: 'Interaction and Motion Design',
              image: 'https://via.placeholder.com/300x200?text=Interaction+Design',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Stay updated with evolving UX trends',
              image: 'https://via.placeholder.com/300x200?text=UX+Trends',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Design System: A Unified Approach to UI/UX',
              image: 'https://via.placeholder.com/300x200?text=Design+System',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Style Guide: Consistency in Design & Experience',
              image: 'https://via.placeholder.com/300x200?text=Style+Guide',
              description: 'Establishes best practices for layouts, spacing, iconography, and usability to enhance brand identity and user experience.',
              pdfUrl: '',
            },
            {
              title: 'Interaction and Motion Design',
              image: 'https://via.placeholder.com/300x200?text=Interaction+Design',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Stay updated with evolving UX trends',
              image: 'https://via.placeholder.com/300x200?text=UX+Trends',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
          ];
        }

        if (!this.userInterfaceItems.length) {
          console.warn('User Interface array is empty, using fallback data');
          this.userInterfaceItems = [
            {
              title: 'Updated Toolkit with Advanced Branding',
              image: 'https://via.placeholder.com/300x200?text=Toolkit',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Essential UI Patterns and Components',
              image: 'https://via.placeholder.com/300x200?text=UI+Patterns',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'UI Guidelines and Best Practices',
              image: 'https://via.placeholder.com/300x200?text=Guidelines',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Updated evolving UI trends',
              image: 'https://via.placeholder.com/300x200?text=UI+Trends',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Updated Toolkit with Advanced Branding',
              image: 'https://via.placeholder.com/300x200?text=Toolkit',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Essential UI Patterns and Components',
              image: 'https://via.placeholder.com/300x200?text=UI+Patterns',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'UI Guidelines and Best Practices',
              image: 'https://via.placeholder.com/300x200?text=Guidelines',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
            {
              title: 'Updated evolving UI trends',
              image: 'https://via.placeholder.com/300x200?text=UI+Trends',
              description: 'It ensures design consistency, clarity, defines principles, colors, typography, and components.',
              pdfUrl: '',
            },
          ];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching PDFs:', err);
        this.loading = false;
      },
    });
  }
}