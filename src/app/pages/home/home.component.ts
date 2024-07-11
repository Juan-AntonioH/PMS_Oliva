import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import iconList from '../../../../public/icons/card_icons.json';
import sliderClientes from '../../../../public/images/clientes/sliderClientes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }
  cards: any[] = []
  slider: any[] = []

  ngOnInit(): void {
    this.cards = iconList;
    this.slider = sliderClientes;
    if (isPlatformBrowser(this.platformId)) {
      this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/slider.js';
    this.renderer.appendChild(document.body, script);
  }
}
