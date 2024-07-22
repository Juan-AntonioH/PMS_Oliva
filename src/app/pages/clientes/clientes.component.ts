import { Component } from '@angular/core';
import sliderClientes from '../../../../public/images/clientes/sliderClientes.json';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: any[] = sliderClientes

  tituloInicial = {
    "tipo": "Clientes",
    "titulo": "Nuestros Clientes"
  }
}
