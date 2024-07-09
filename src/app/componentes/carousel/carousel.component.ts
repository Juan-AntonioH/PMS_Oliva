import { Component } from '@angular/core';
import imageList from '../../../../public/images/carousel/carousel_images.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides: any[] = []

  ngOnInit(): void {
    this.slides = imageList;
  }
}
