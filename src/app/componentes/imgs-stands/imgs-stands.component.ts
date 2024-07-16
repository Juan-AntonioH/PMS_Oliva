import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-imgs-stands',
  templateUrl: './imgs-stands.component.html',
  styleUrl: './imgs-stands.component.css',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('ferias', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ImgsStandsComponent {
  @Input() feria!: any

  showAnimation = false;
  currentIndex = -1;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.checkScroll, true);
    }
  }

  checkScroll = () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const triggerPoint = this.getTriggerPoint();

    if (scrollPosition >= triggerPoint) {
      this.showAnimation = true;
      this.cargarAnimacion()
      window.removeEventListener('scroll', this.checkScroll, true);
    }
  }

  getTriggerPoint() {
    const element = document.getElementById('ferias');
    if (element) {
      const elementPosition = element.offsetTop;
      return elementPosition;

    }
    return 0;
  }

  cargarAnimacion() {
    setInterval(() => {
      this.currentIndex++;
    }, 300);
  }
}
