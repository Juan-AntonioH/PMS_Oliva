import { Component, Input } from '@angular/core';
import { Cualidad } from '../../../modelos/cualidad';
@Component({
  selector: 'app-cualidad',
  templateUrl: './cualidad.component.html',
  styleUrl: './cualidad.component.css'
})
export class CualidadComponent {
  @Input() cualidad!: Cualidad
}
