import { Component, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative-div" *ngIf="items.length > 0; else noItems">
      <div #swiper [class]="'swiper-' + carouselId" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" *ngFor="let item of items">
            <div class="carousel-item">
              <div class="carousel-image">
                <img [src]="item.image" [alt]="item.title" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a [href]="item.pdfUrl" target="_blank" class="view-details">View Details <span>→</span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-btn">
        <div [class]="'swiper-button-prev-' + carouselId" class="swiper-button-prev"></div> <!-- Prev Button -->
        <div [class]="'swiper-button-next-' + carouselId" class="swiper-button-next"></div> <!-- Next Button -->
      </div>
    </div>

    <ng-template #noItems>
      <p>No items available.</p>
    </ng-template>
  `,
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() items: any[] = [];
  @Input() carouselId: string = 'default'; // Unique identifier for each carousel
  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef;
  private swiperInstance: Swiper | null = null;

  ngAfterViewInit() {
    if (this.items.length > 0) {
      setTimeout(() => this.initializeSwiper(), 0);
    }
  }

  ngOnChanges() {
    if (this.items.length > 0) {
      setTimeout(() => {
        if (this.swiperInstance) {
          this.swiperInstance.destroy(true, true);
        }
        this.initializeSwiper();
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }

  private initializeSwiper() {
    if (this.swiperRef?.nativeElement) {
      this.swiperInstance = new Swiper(this.swiperRef.nativeElement, {
        modules: [Navigation],
        slidesPerView: 4,       // Show 4 slides at a time
        slidesPerGroup: 1,      // Ensure one slide moves per navigation
        spaceBetween: 20,
        pagination: { clickable: true },
        loop: false,
        navigation: {
          nextEl: `.swiper-button-next-${this.carouselId}`,
          prevEl: `.swiper-button-prev-${this.carouselId}`,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        },
        on: {
          init: () => this.updateNavigationButtons(),
          slideChange: () => this.updateNavigationButtons(),
        },
      });
    } else {
      console.error('Swiper container not found');
    }
  }

  private updateNavigationButtons() {
    if (!this.swiperInstance) return;

    const prevButton = document.querySelector(`.swiper-button-prev-${this.carouselId}`) as HTMLElement;
    const nextButton = document.querySelector(`.swiper-button-next-${this.carouselId}`) as HTMLElement;

    const totalSlides = this.swiperInstance.slides.length;
    const currentIndex = this.swiperInstance.activeIndex;
    const slidesPerView = this.swiperInstance.params.slidesPerView || 4;

    if (this.swiperInstance.isBeginning) {
      prevButton?.classList.add('swiper-button-disabled');
    } else {
      prevButton?.classList.remove('swiper-button-disabled');
    }

    if (currentIndex >= totalSlides - Number(slidesPerView)) {
      nextButton?.classList.add('swiper-button-disabled');
    } else {
      nextButton?.classList.remove('swiper-button-disabled');
    }
  }
}