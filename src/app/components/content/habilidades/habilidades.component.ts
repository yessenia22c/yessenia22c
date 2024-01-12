import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('logosSlide') logosSlide!: ElementRef;
  @ViewChild('logos') logos!: ElementRef;

  ngAfterViewInit() {
    this.cloneLogosSlide();
  }

  cloneLogosSlide() {
     const copy = this.logosSlide.nativeElement.cloneNode(true);
     this.logos.nativeElement.appendChild(copy);
 }
}
