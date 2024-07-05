import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() links!: any
  @Output() CloseSidenav = new EventEmitter<void>();
  constructor() { }
  onClose() {
    this.CloseSidenav.emit();
  }
  ngOnInit(): void {
  }
}
