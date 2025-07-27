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
  projects = [
    {
      title: 'De Latinos(No Country)',
      description: 'Proyecto conjunto para ventas de producto latinos. Desarrollado con Angular, Spring Boot y MySQL.',
      link: 'https://github.com/MaxiFusco/s9-07-ft-java-angular',
    image: 'assets/projects/delatinos.jpg'
    },
     {
      title: 'API Agenda',
      description: 'Proyecto educativo , API para agenda realiada en Java. Desarrollado con Java , Spring Boot y MySQL.',
      link: 'https://github.com/MaxiFusco/API_programacion2',
      image: 'assets/projects/delatinos.jpg'
    },
     {
      title: 'Agenda',
      description: 'Proyecto educativo , Agenda para guardar contraeñas. Desarrollado con Java (Swing).',
      link: 'https://github.com/MaxiFusco/Agenda-passw_Programacion2',
      image: 'assets/projects/delatinos.jpg'
    },
    {
      title: 'Tango Viajes (No Country)',
      description: 'Proyecto conjunto , plataforma  de venta de viajes por la Republica Argentina. Desarrollado con Angular, Spring Boot y MySQL.',
      link: 'https://github.com/MaxiFusco/C11-16-FT-JavaAngular',
      image: 'assets/projects/delatinos.jpg'
    } ,
     {
      title: 'A-Labur-AR',
      description: 'Proyecto educativo , plataforma para buscar empleo. Desarrollado con HTML5, CSS, Javascript y PHP.',
      link: 'https://github.com/MaxiFusco/Practicas-Profesionalizantes-I',
      image: 'assets/projects/delatinos.jpg'
    }
  ];
}

