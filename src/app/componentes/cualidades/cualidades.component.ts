import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Cualidad } from '../../modelos/cualidad';
import { animate, transition, style, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cualidades',
  templateUrl: './cualidades.component.html',
  styleUrls: ['./cualidades.component.css'],
  animations: [
    trigger('cualidad', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CualidadesComponent {
  showAnimation = false;
  currentIndex = -1;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.checkScroll, true);
    }
  }

  checkScroll = () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const triggerPoint = this.getTriggerPoint();

    if (scrollPosition >= triggerPoint) {
      this.showAnimation = true;
      this.cargarAnimacion();
      window.removeEventListener('scroll', this.checkScroll, true);
    }
  }

  getTriggerPoint() {
    const element = document.getElementById('cualidades');
    if (element) {
      const elementPosition = element.offsetTop;
      return elementPosition;
    }
    return 0;
  }

  cargarAnimacion() {
    setInterval(() => {
      this.currentIndex++;
    }, 300);
  }

  cualidades: Cualidad[] = [
    {
      id: "01",
      titulo: "Profesionalismo",
      texto: "Desde el 2006 proyectando el futuro.",
      color: "#FFFFFF",
      background: "#048B57",
      borderColor: "#048B57"
    },
    {
      id: "02",
      titulo: "Trato",
      texto: "Cercanía y adaptado a cada proyecto.",
      color: "#CAAF82",
      background: "#FFFFFF",
      borderColor: "#CAAF82"
    },
    {
      id: "03",
      titulo: "Innovación",
      texto: "Últimas tecnologías y tendencias.",
      color: "#FFFFFF",
      background: "#5EA9C5",
      borderColor: "#5EA9C5"
    },
    {
      id: "04",
      titulo: "Metodologías",
      texto: "Aplicación de métodos sólidos en cada proyecto.",
      color: "#16558F",
      background: "#FFFFFF",
      borderColor: "#16558F"
    },
    {
      id: "05",
      titulo: "Certificaciones",
      texto: "Certificados nacional e internacionalmente.",
      color: "#D64E05",
      background: "#FFFFFF",
      borderColor: "#D64E05"
    },
    {
      id: "06",
      titulo: "Colaboración",
      texto: "Ámbito de trabajo colaborativo.",
      color: "#FFFFFF",
      background: "#024850",
      borderColor: "#024850"
    },
    {
      id: "07",
      titulo: "Satisfacción",
      texto: "Compromiso con las expectativas.",
      color: "#2B2A2A",
      background: "#FFFFFF",
      borderColor: "#2B2A2A"
    },
    {
      id: "08",
      titulo: "Sostenibilidad",
      texto: "Minimizamos el impacto en el medio ambiente.",
      color: "#FFFFFF",
      background: "#2B2A2A",
      borderColor: "#2B2A2A"
    }
  ]
}
