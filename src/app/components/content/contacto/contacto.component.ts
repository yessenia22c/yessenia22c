import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormsModule, FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  envioExitoso: boolean = false;
  envioFallido: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      this.http.post('https://formspree.io/f/xrgnezqb', formData)
        .subscribe( 
          {
            next: () => {
              this.contactForm.reset();
              this.envioExitoso = true;
            },
            error: (error) => {
              console.log(error, 'Ha ocurrido un error al enviar el formulario. Inténtalo de nuevo.');
              this.envioFallido = true;
            }
          }
        );
    }
  }
}
