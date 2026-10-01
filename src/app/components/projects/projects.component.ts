import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule]
})
export class ProjectsComponent {

  // Los destacados están harcodeados en el HTML para darles un layout específico (Problema, Solución, etc)
  
  otherProjects = [
    {
      title: 'De Latinos',
      description: 'Plataforma E-commerce para exportación al mercado europeo con logística integral.',
      link: 'https://github.com/MaxiFusco/s9-07-ft-java-angular',
      tags: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Tango Viajes',
      description: 'Plataforma de servicios turísticos enfocada en optimización de reservas de pasajes.',
      link: 'https://github.com/MaxiFusco/C11-16-FT-JavaAngular',
      tags: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'API-Rest Agenda',
      description: 'Servicio Backend seguro con módulos de autenticación y operaciones CRUD.',
      link: 'https://github.com/MaxiFusco/API_programacion2',
      tags: ['Java', 'Spring Boot', 'Security']
    },
    {
      title: 'A-Labur-AR',
      description: 'Plataforma de intermediación laboral para vincular empresas con talento local.',
      link: 'https://github.com/MaxiFusco/Practicas-Profesionalizantes-I',
      tags: ['PHP', 'JavaScript', 'MySQL']
    }
  ];
}