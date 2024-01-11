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

  currentIndex = 0;
  totalSlides!: number;

  ngAfterViewInit() {
    this.totalSlides = this.slider.nativeElement.querySelectorAll('.slide').length;
    console.log(this.totalSlides);
  }

  showSlide(index: number) {
    const newPosition = -index * 100 + '%';
    this.slider.nativeElement.style.transition = 'transform 0.5s ease-in-out';
    this.slider.nativeElement.style.transform = 'translateX(' + newPosition + ')';
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.showSlide(this.currentIndex);
  }

  resetSlider() {
    this.currentIndex = 0;
    this.showSlide(this.currentIndex);
  }

  transitionEnd() {
    // Resetea la posición sin animación cuando la transición ha terminado
    this.slider.nativeElement.style.transition = 'none';

    // Si llegamos al último slide, retrocede al primero sin animación
    if (this.currentIndex === this.totalSlides - 1) {
      setTimeout(() => {
        this.currentIndex = 0;
        this.showSlide(this.currentIndex);
      });
    }
  }
}
