
import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skillCategories: SkillCategory[] = [
    {
      title: 'Android y Digital Signage',
      description: 'Desarrollo de aplicaciones y soluciones de cartelería digital.',
      technologies: [
        'Java',
        'Android SDK',
        'Android Studio',
        'WebView'
      ]
    },
    {
      title: 'IoT y sistemas embebidos',
      description: 'Integración hardware/software y comunicación con dispositivos.',
      technologies: [
        'C++',
        'ESP32',
        'UART',
        'I²C',
        'Firmware'
      ]
    },
    {
      title: 'Desarrollo web',
      description: 'Aplicaciones web y tecnologías frontend y backend.',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'Spring Boot'
      ]
    },
    {
      title: 'Herramientas de desarrollo',
      description: 'Entornos y herramientas para el desarrollo de software.',
      technologies: [
        'Git',
        'GitHub',
        'VS Code',
        'Visual Studio',
        'PlatformIO'
      ]
    }
  ];

}
