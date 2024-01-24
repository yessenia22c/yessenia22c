import { Component } from '@angular/core';
import { CardsProyectosComponent } from "./cards-proyectos/cards-proyectos.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { HabilidadesComponent } from "./habilidades/habilidades.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [CardsProyectosComponent, ExperienciaComponent, HabilidadesComponent, ContactoComponent]
})
export class ContentComponent {
    constructor(private http: HttpClient) {}

    abrirCorreo(){
        window.open('mailto:yesseniavillarte@gmail.com', '_blank');
    }
    downloadCv(){
        const pdfUrl = 'assets/document/CV-Yessenia-Villarte-Tec-Informatica.pdf';

    this.http.get(pdfUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        // Guardar el archivo

        //saveAs(blob, 'CV-Yessenia-Villarte.pdf');
        // Abrir el archivo en otra pestaña
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl, '_blank');
      }, error => {
        console.error('Error al descargar el PDF', error);
      });
    }
}
