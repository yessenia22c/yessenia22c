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
      title: 'Bases de datos y herramientas',
      description: 'Persistencia de información, control de versiones y despliegue.',
      tools: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Docker', 'Git / GitHub', 'Linux / Ubuntu']
    },
    {
      title: 'Inteligencia artificial y automatización',
      description: 'Conocimientos para integrar IA en procesos y productos empresariales.',
      tools: ['RAG empresarial', 'Agentes de IA', 'Integración de modelos de IA', 'Bots automatizados', 'Qdrant', 'Diseño de prompts']
    }
  ];
}
