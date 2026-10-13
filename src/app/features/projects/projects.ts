import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

// Estructura que debe tener cada proyecto
interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  // Listado de proyectos del portfolio
  projects: Project[] = [
    {
      id: 'esp32-power-monitor',

      title: 'ESP32 Power Monitor',

      description:
        'Sistema IoT basado en ESP32-S3 para detectar cortes ' +
        'del suministro eléctrico, registrar eventos con fecha ' +
        'y hora, y enviar notificaciones automáticas mediante Telegram.',

      status: 'En desarrollo',

      technologies: [
        'ESP32-S3',
        'C++',
        'PlatformIO',
        'RTC DS3231',
        'EEPROM AT24C32',
        'I²C',
        'Wi-Fi',
        'Telegram API'
      ]
    }
  ];

}
