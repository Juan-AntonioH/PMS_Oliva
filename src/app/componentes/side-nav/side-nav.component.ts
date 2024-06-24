import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  links = [
    {ruta: 'HOME' , url: '/' },
    {ruta: 'NOSOTROS' , url: '/nosotros'},
    {ruta: 'CONTACTO', url: '/contacto' },
]
@Output() CloseSidenav = new EventEmitter<void>();
  constructor() { }
 onClose(){
    this.CloseSidenav.emit();
  }
  ngOnInit(): void {
  }
}
