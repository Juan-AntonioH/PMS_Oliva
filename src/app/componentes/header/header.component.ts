import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() links!: any
  @Output() SidenavToggle = new EventEmitter<void>();
  constructor(public router: Router) { }
  onToggleSidenav() {
    this.SidenavToggle.emit();
  }
  ngOnInit(): void {
  }
}
