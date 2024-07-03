import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pms_oliva';
  
  links = [
    { ruta: 'HOME', url: '/' },
    { ruta: 'NOSOTROS', url: '/nosotros' },
    { ruta: 'CONTACTO', url: '/contacto' },
  ];
}
