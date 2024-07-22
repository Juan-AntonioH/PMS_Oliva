import { Component, OnInit, Renderer2, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']  // Corrigido: 'styleUrls' en lugar de 'styleUrl'
})
export class ServicioComponent implements OnInit, AfterViewInit {
  @Input() servicio!: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.handleScroll();
    this.renderer.listen('window', 'scroll', () => {
      this.handleScroll();
    });
  }

  private handleScroll(): void {
    const icons: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.icon');
    Array.from(icons).forEach((icon: HTMLElement) => {
      const rect = icon.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.renderer.addClass(icon, 'visible');
      }
    });
  }
}
