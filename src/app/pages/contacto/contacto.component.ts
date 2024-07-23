import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  tituloInicial = {
    "tipo": "Contacto",
    "titulo": "Contacta con nosotros tus proyectos"
  }
  mensaje: string = ''
  // editorConfiguration!: Object
  formularioContacto!: FormGroup
  resultado!: string
  estadoFormulario: boolean = true
  respuestaEnvio: boolean = true
  statusResponse!: boolean
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.formularioContacto = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: ['', [Validators.required, Validators.email,
      Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      movil: ['', [Validators.required, Validators.minLength(7),
      Validators.maxLength(12),
      Validators.pattern(/^([0-9])*$/)]],
      empresa: ['', Validators.required],
      // mensaje: ['', [Validators.required, Validators.minLength(5)]],
      // file: ['', Validators.required],
      check: [false, Validators.requiredTrue]
    })
  }
  getCampoClases(campo: string): string {
    const control = this.formularioContacto.get(campo);
    if (control?.invalid && control?.touched) {
      return 'input-invalid';
    } else if (control?.valid) {
      return 'input-valid';
    }
    return '';
  }
  submit() {
    this.estadoFormulario = false
    this.respuestaEnvio = true

    if (this.formularioContacto.valid) {
      this.estadoFormulario = true
      alert("qweqwe")
    } else {
      alert("wqewqeqqqqqq")
    }
  }
}
