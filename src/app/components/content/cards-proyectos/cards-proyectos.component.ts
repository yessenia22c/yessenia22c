import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-proyectos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cards-proyectos.component.html',
  styleUrl: './cards-proyectos.component.css'
})
export class CardsProyectosComponent {
  constructor() {}
  cardFlipped: boolean = false;
  // voltearCard() {
  //   this.cardFlipped = !this.cardFlipped;

  // }


  tarjetas = Array(3).fill({ isFlipped: false }); // Cambia el número 3 según el número de tarjetas

  flipCard(index: number) {
    this.tarjetas[index].isFlipped = !this.tarjetas[index].isFlipped;
  }
  linkSisicap() {
    window.open('https://cliente-angular-9k9.pages.dev', '_blank');
  }
  linkTienda() {
    window.open('https://www.eliteiso.org/cursos', '_blank');
  }

  cardFlipped1: boolean = false;
  cardFlipped2: boolean = false;
  cardFlipped3: boolean = false;
  cardFlipped4: boolean = false;

  voltearCard(elemento: number) {
  // Dependiendo del elemento, cambia la variable correspondiente
  if (elemento === 1) {
    this.cardFlipped1 = !this.cardFlipped1;
  } else if (elemento === 2) {
    this.cardFlipped2 = !this.cardFlipped2;
  }else if (elemento === 3) {
    this.cardFlipped3 = !this.cardFlipped3;
  }else if (elemento === 4) {
    this.cardFlipped4 = !this.cardFlipped4;
  }
  // Agrega lógica adicional si es necesario
}
}
