import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Interface for carousel items
interface CarouselItem {
  title: string;
  image: string;
  description: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activeTab: string = 'user-experience';
  userExperienceItems: CarouselItem[] = [];
  userInterfaceItems: CarouselItem[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;
  isPollingEnabled: boolean = true; // Toggle for polling
  private pollingSubscription: Subscription | null = null;
  private readonly apiUrl: string = '/api/pdfs'; // Configurable API URL

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.fetchPdfs();
    this.startPolling();
  }

  ngOnDestroy() {
    this.stopPolling();
  }

  // Start polling for PDF updates
  private startPolling() {
    this.pollingSubscription = interval(60000).subscribe(() => {
      if (this.isPollingEnabled) {
        this.fetchPdfs();
      }
    });
  }

  // Stop polling
  private stopPolling() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
      this.pollingSubscription = null;
    }
  }

  // Toggle polling state
  togglePolling() {
    this.isPollingEnabled = !this.isPollingEnabled;
    if (this.isPollingEnabled && !this.pollingSubscription) {
      this.startPolling();
    }
  }

  // Fetch PDFs from the backend
  fetchPdfs() {
    this.loading = true;
    this.errorMessage = null;

    this.http
      .get<{ userExperience: CarouselItem[]; userInterface: CarouselItem[]; archived: { title: string }[] }>(this.apiUrl)
      .pipe(
        retry(2), // Retry up to 2 times on failure
        catchError(this.handleError.bind(this))
      )
      .subscribe({
        next: (data) => {
          console.log('Fetched PDFs:', data);
          this.userExperienceItems = data.userExperience || [];
          this.userInterfaceItems = data.userInterface || [];

          // Fallback data for user experience
          if (!this.userExperienceItems.length) {
            console.warn('User Experience array is empty, using fallback data');
            this.userExperienceItems = [
              {
                title: 'Design System: A Unified Approach to UI/UX',
                image: 'https://via.placeholder.com/300x200?text=Design+System',
                description: 'Ensures design consistency, clarity, defines principles, colors, typography, and components.',
                pdfUrl: '',
              },
              {
                title: 'Style Guide: Consistency in Design & Experience',
                image: 'https://via.placeholder.com/300x200?text=Style+Guide',
                description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
                pdfUrl: '',
              },
              {
                title: 'Interaction and Motion Design',
                image: 'https://via.placeholder.com/300x200?text=Interaction+Design',
                description: 'Enhances user engagement with smooth animations and transitions.',
                pdfUrl: '',
              },
              {
                title: 'Stay updated with evolving UX trends',
                image: 'https://via.placeholder.com/300x200?text=UX+Trends',
                description: 'Keeps your designs aligned with the latest UX innovations.',
                pdfUrl: '',
              },
              {
                title: 'Design System: A Unified Approach to UI/UX',
                image: 'https://via.placeholder.com/300x200?text=Design+System',
                description: 'Ensures design consistency, clarity, defines principles, colors, typography, and components.',
                pdfUrl: '',
              },
              {
                title: 'Style Guide: Consistency in Design & Experience',
                image: 'https://via.placeholder.com/300x200?text=Style+Guide',
                description: 'Establishes best practices for layouts, spacing, iconography, and usability.',
                pdfUrl: '',
              },
              {
                title: 'Interaction and Motion Design',
                image: 'https://via.placeholder.com/300x200?text=Interaction+Design',
                description: 'Enhances user engagement with smooth animations and transitions.',
                pdfUrl: '',
              },
              {
                title: 'Stay updated with evolving UX trends',
                image: 'https://via.placeholder.com/300x200?text=UX+Trends',
                description: 'Keeps your designs aligned with the latest UX innovations.',
                pdfUrl: '',
              },
            ];
          }

          // Fallback data for user interface
          if (!this.userInterfaceItems.length) {
            console.warn('User Interface array is empty, using fallback data');
            this.userInterfaceItems = [
              {
                title: 'Updated Toolkit with Advanced Branding',
                image: 'https://via.placeholder.com/300x200?text=Toolkit',
                description: 'Provides tools for consistent branding across UI elements.',
                pdfUrl: '',
              },
              {
                title: 'Essential UI Patterns and Components',
                image: 'https://via.placeholder.com/300x200?text=UI+Patterns',
                description: 'Standardized components for rapid UI development.',
                pdfUrl: '',
              },
              {
                title: 'UI Guidelines and Best Practices',
                image: 'https://via.placeholder.com/300x200?text=Guidelines',
                description: 'Best practices for creating intuitive user interfaces.',
                pdfUrl: '',
              },
              {
                title: 'Updated evolving UI trends',
                image: 'https://via.placeholder.com/300x200?text=UI+Trends',
                description: 'Stay ahead with the latest UI design trends.',
                pdfUrl: '',
              },
              {
                title: 'Updated Toolkit with Advanced Branding',
                image: 'https://via.placeholder.com/300x200?text=Toolkit',
                description: 'Provides tools for consistent branding across UI elements.',
                pdfUrl: '',
              },
              {
                title: 'Essential UI Patterns and Components',
                image: 'https://via.placeholder.com/300x200?text=UI+Patterns',
                description: 'Standardized components for rapid UI development.',
                pdfUrl: '',
              },
              {
                title: 'UI Guidelines and Best Practices',
                image: 'https://via.placeholder.com/300x200?text=Guidelines',
                description: 'Best practices for creating intuitive user interfaces.',
                pdfUrl: '',
              },
              {
                title: 'Updated evolving UI trends',
                image: 'https://via.placeholder.com/300x200?text=UI+Trends',
                description: 'Stay ahead with the latest UI design trends.',
                pdfUrl: '',
              },
            ];
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred while fetching PDFs.';
    if (error.status === 404) {
      errorMessage = 'PDF API endpoint not found. Please check the server configuration.';
    } else if (error.status === 403) {
      errorMessage = 'Access denied to PDF resources. Please contact the administrator.';
    } else if (error.status === 500) {
      errorMessage = 'Server error. Please try again later or contact support.';
    }
    console.error('Fetch error:', error.status, error.message);
    this.errorMessage = errorMessage;
    return throwError(() => new Error(errorMessage));
  }

  // Retry fetching PDFs manually
  retryFetchPdfs() {
    this.fetchPdfs();
  }
}