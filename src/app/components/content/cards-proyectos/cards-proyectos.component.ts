import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './cards-proyectos.component.html',
  styleUrl: './cards-proyectos.component.css'
})
export class CardsProyectosComponent {
  constructor() {}
  cardFlipped: boolean = false;
  voltearCard() {
    this.cardFlipped = !this.cardFlipped;

  }
  linkSisicap() {
    window.open('https://sistema.eliteiso.org', '_blank');
  }
  linkTienda() {
    window.open('https://www.eliteiso.org/cursos', '_blank');
  }
}
