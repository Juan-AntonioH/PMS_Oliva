import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import feriasList from '../../../../public/images/proyectos/feriasList.json';
import { ImgsStandsComponent } from '../imgs-stands/imgs-stands.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  standalone: true,
  imports: [MatTabsModule, ImgsStandsComponent]
})
export class TabsComponent {
   ferias!: any

  ngOnInit(): void {
    this.ferias = feriasList;
  }
}
