import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  links = [
    { ruta: 'INICIO', url: '/' },
    { ruta: 'NOSOTROS', url: '/nosotros' },
    { ruta: 'PROYECTOS', url: '/proyectos' },
    { ruta: 'SERVICIOS', url: '/servicios' },
    { ruta: 'CLIENTES', url: '/clientes' },
    { ruta: 'CONTACTO', url: '/contacto' },
  ];
}
