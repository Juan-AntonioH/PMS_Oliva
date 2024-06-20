import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('drawer') drawer: MatSidenav | undefined;

  toggleSidenav() {
    console.log('Toggle Sidenav clicked');
    if (this.drawer) {
      this.drawer.toggle();
    } else {
      console.error('drawer is undefined');
    }
  }
}
