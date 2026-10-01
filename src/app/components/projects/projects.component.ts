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

  otherProjects = [
    {
      title: 'GymFit',
      description: 'Sistema integral SaaS para administración total de centros de fitness, rutinas y usuarios.',
      link: 'https://github.com/MaxiFusco/GymFit',
      tags: ['React', 'Spring Boot', 'MySQL'],
      image: 'assets/gymfit.png'
    },
    {
      title: 'Ruedas Compartidas',
      description: 'Plataforma digital para la gestión y logística del alquiler de vehículos con motor de reservas.',
      link: 'https://github.com/MaxiFusco/RuedasCompartidas',
      tags: ['Spring Boot', 'React', 'MySQL'],
      image: 'assets/ruedas.png'
    },
    {
      title: 'De Latinos',
      description: 'Plataforma E-commerce para exportación al mercado europeo con logística integral.',
      link: 'https://github.com/MaxiFusco/s9-07-ft-java-angular',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      image: 'assets/delatinos.png'
    },
    {
      title: 'Tango Viajes',
      description: 'Plataforma de servicios turísticos enfocada en optimización de reservas de pasajes.',
      link: 'https://github.com/MaxiFusco/C11-16-FT-JavaAngular',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      image: 'assets/tangoviajes.png'
    },
    {
      title: 'API-Rest Agenda',
      description: 'Servicio Backend seguro con módulos de autenticación y operaciones CRUD.',
      link: 'https://github.com/MaxiFusco/API_programacion2',
      tags: ['Java', 'Spring Boot', 'Security'],
      image: 'assets/agenda.png'
    }
  ];
}