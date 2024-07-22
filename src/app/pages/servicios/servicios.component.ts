import { Component } from '@angular/core';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  tituloInicial = {
    "tipo": "Servicios",
    "titulo": "Todo lo que necesitas para Ferias o Eventos"
  }

  servicios = [
    {
      "titulo": "Proyectos",
      "color": "#4267E9",
      "hover": false,
      "servicio": {
        "titulo": "Proyectos",
        "texto1": "Un profundo conocimiento de los procesos de fabricación, la experiencia en la distribución racional de espacios y el objetivo de destacar entre el resto de expositores nos guían a la hora de realizar un diseño.",
        "texto2": "Al tanto de las últimas tendencias y de las innovaciones tecnológicas y audiovisuales",
        "texto3": "Un diseño que no sólo debe ser atractivo, sino realizable y que respete un presupuesto establecido.",
        "texto4": "Nuestro equipo de diseñadores sabe ajustarse a todos estos parámetros y consigue resultados espectaculares.",
        "imagen": "proyecto.webp"
      }
    }, {
      "titulo": "Fabricamos",
      "color": "#048B57",
      "hover": false,
      "servicio": {
        "titulo": "Fabricamos",
        "texto1": "La calidad de la construcción y un precio final inmejorable tienen un secreto: Fabricamos nuestros stands en nuestras instalaciones. ",
        "texto2": "Fabricamos stands diseñados por nosotros mismos y fabricamos para terceros.",
        "texto3": "Disponemos de las últimas tecnologías en maquinaria de corte y contamos con auténticos artesanos de la madera.",
        "texto4": "Poseemos un amplio almacén de material audiovisual de última generación, que nos permite ser autónomos en este campo y abaratar considerablemente los proyectos a nuestros clientes.",
        "imagen": "fabricacion.webp"
      }
    }, {
      "titulo": "Montamos",
      "color": "#FE8C34",
      "hover": false,
      "servicio": {
        "titulo": "Montamos",
        "texto1": "En España e internacionalmente. Grandes stands y pequeños espacios.",
        "texto2": "Stands de diseño o stands modulares. Stands individuales o compartidos.",
        "texto3": "Pero siempre con personal propio altamente cualificado. Y almacenamos a nuestros clientes los materiales que puedan ser utilizados en próximas ferias.",
        "texto4": "Por supuesto nos encargamos de todos los servicios adicionales: catering, animadores, contratación de azafatas, etc.",
        "imagen": "montaje.webp"
      }
    }
  ]


  onMouseOver(servicio: any) {
    servicio.hover = true;
  }

  onMouseLeave(servicio: any) {
    servicio.hover = false;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
