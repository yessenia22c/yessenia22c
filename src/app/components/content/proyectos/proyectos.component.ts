import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  linkSisicap() {
    window.open('https://frontend-sisicap.vercel.app', '_blank');
  }
  linkTienda() {
    window.open('https://www.eliteiso.org/cursos', '_blank');
  }
  linkIADetectaEstafa() {
    window.open('https://ai-detecta-estafa.vercel.app', '_blank');
  }
}

