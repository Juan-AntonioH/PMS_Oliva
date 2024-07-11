import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-clientes',
  templateUrl: './slider-clientes.component.html',
  styleUrl: './slider-clientes.component.css'
})
export class SliderClientesComponent {
  @Input() slider!: any
}
