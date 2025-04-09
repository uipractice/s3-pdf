import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ title }}</h2>
    <div class="cards">
      <div *ngFor="let item of items" class="card">
        <div class="card-image"></div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <button (click)="viewDetails(item.pdfUrl)">View Details</button>
      </div>
    </div>
  `,
  styleUrl: './tab-content.component.css',
})
export class TabContentComponent {
  @Input() title: string = '';
  @Input() items: any[] = [];

  viewDetails(pdfUrl: string) {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  }
}