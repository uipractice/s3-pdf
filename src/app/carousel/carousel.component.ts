// src/app/carousel/carousel.component.ts
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
      <div #swiper class="swiper">
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
        <div class="swiper-button-prev"></div>   <!-- Prev Button -->
        <div class="swiper-button-next"></div>   <!-- Next Button -->
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
  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef;
  private swiperInstance: Swiper | null = null;

  constructor() {}

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
        slidesPerView: 4,       //  Show 4 slides at a time
        spaceBetween: 20,
        pagination: { clickable: true },
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
        on: {
          init: () => this.updateNavigationButtons(),    //  Call when swiper initializes
          slideChange: () => this.updateNavigationButtons(), // Call on slide change
        },
      });
    } else {
      console.error('Swiper container not found');
    }
  }

  //  Updated logic to disable the "Next" button when the last four slides are visible
  private updateNavigationButtons() {
    if (!this.swiperInstance) return;

    const prevButton = document.querySelector('.swiper-button-prev') as HTMLElement;
    const nextButton = document.querySelector('.swiper-button-next') as HTMLElement;

    const totalSlides = this.swiperInstance.slides.length;
    const currentIndex = this.swiperInstance.activeIndex;
    const slidesPerView = this.swiperInstance.params.slidesPerView || 4; // Default to 4

    //  Disable Prev Button if at the beginning
    if (this.swiperInstance.isBeginning) {
      prevButton?.classList.add('swiper-button-disabled');
    } else {
      prevButton?.classList.remove('swiper-button-disabled');
    }

    //  Disable Next Button when reaching the last 4 slides
  if (currentIndex >= totalSlides - Number(slidesPerView)) { 
      nextButton?.classList.add('swiper-button-disabled');  //  Disable "Next"
    } else {
      nextButton?.classList.remove('swiper-button-disabled'); //  Enable "Next"
    }
  }
}
