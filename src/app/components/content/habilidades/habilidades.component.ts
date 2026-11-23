import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  description: string;
  tools: string[];
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'Frontend',
      description: 'Interfaces web y experiencia de usuario.',
      tools: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend e integraciones',
      description: 'Servicios, lógica de negocio y comunicación entre plataformas.',
      tools: ['C# / .NET', 'Node.js', 'APIs REST', 'WhatsApp Business Cloud API', 'Cybersource', 'Openpay Perú']
    },
    {
      title: 'Bases de datos e infraestructura',
      description: 'Persistencia de información y herramientas de entorno.',
      tools: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Docker', 'Linux / Ubuntu']
    },
    {
      title: 'Control de versiones, pruebas y CI/CD',
      description: 'Flujos de desarrollo, validación y entrega continua.',
      tools: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Creación y ejecución de pruebas', 'Despliegues automáticos a test']
    },
    {
      title: 'Inteligencia artificial y automatización',
      description: 'Conocimientos para integrar IA en procesos y productos empresariales.',
      tools: ['RAG empresarial', 'Agentes de IA', 'Integración de modelos de IA', 'Bots automatizados', 'Qdrant', 'Diseño de prompts']
    }
  ];
}
