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
    window.open('https://cliente-angular-9k9.pages.dev', '_blank');
  }
  linkTienda() {
    window.open('https://www.eliteiso.org/cursos', '_blank');
  }
}
