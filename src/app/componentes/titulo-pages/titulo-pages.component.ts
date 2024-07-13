import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-pages',
  templateUrl: './titulo-pages.component.html',
  styleUrl: './titulo-pages.component.css'
})
export class TituloPagesComponent {
  @Input() tituloInicial!: any
}
