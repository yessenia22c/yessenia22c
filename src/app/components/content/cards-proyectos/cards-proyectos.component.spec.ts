import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProyectosComponent } from './cards-proyectos.component';

describe('CardsProyectosComponent', () => {
  let component: CardsProyectosComponent;
  let fixture: ComponentFixture<CardsProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
