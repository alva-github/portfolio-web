import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-techrepair-detail',
  imports: [RouterLink],
  templateUrl: './techrepair-detail.html',
  styleUrl: './techrepair-detail.css',
})
export class TechrepairDetail {
  technologies: string[] = [
    'Angular',
    'TypeScript',
    'Java 21',
    'Spring Boot',
    'Spring Data JPA',
    'PostgreSQL',
    'REST API',
    'MQTT',
    'Mosquitto',
    'iFixit API',
    'Maven',
    'Git',
  ];
}
