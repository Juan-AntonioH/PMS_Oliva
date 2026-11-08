import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  tituloInicial = {
    "tipo": "Proyectos",
    "titulo": "Nuestros Trabajos"
  }
}
