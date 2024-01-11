import { Component } from '@angular/core';
import { CardsProyectosComponent } from "./cards-proyectos/cards-proyectos.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { HabilidadesComponent } from "./habilidades/habilidades.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [CardsProyectosComponent, ExperienciaComponent, HabilidadesComponent]
})
export class ContentComponent {

    abrirCorreo(){
        window.open('mailto:yesseniavillarte@gmail.com', '_blank');
    }

}
