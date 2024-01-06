import { Component } from '@angular/core';
import { CardsProyectosComponent } from "./cards-proyectos/cards-proyectos.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [CardsProyectosComponent]
})
export class ContentComponent {

}
