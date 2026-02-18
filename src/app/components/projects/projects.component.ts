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
      title: 'Ruedas Compartidas',
      description: 'Ecosistema digital para la gestión logística de alquiler de vehículos. Implementa un motor de reservas robusto y gestión documental de activos. Desarrollado con Java (Spring Boot), React y MySQL.',
      link: 'https://github.com/MaxiFusco/RuedasCompartidas',
      image: '/assets/ruedas.png'
    },
    {
      title: 'De Latinos (No Country)',
      description: 'Plataforma E-commerce para la exportación de productos latinoamericanos al mercado europeo. Gestión integral de logística y envíos. Desarrollado en equipo multidisciplinario con Angular, Spring Boot y MySQL.',
      link: 'https://github.com/MaxiFusco/s9-07-ft-java-angular',
      image: '/assets/delatinos.png'
    },
    {
      title: 'GymFit',
      description: 'Sistema de gestión para centros de salud y fitness. Permite la administración de rutinas, planes nutricionales y catálogo de productos por profesionales. Desarrollado con React, Java (Spring Boot) y MySQL.',
      link: 'https://github.com/MaxiFusco/GymFit',
      image: '/assets/gymfit.png'
    },
    {
      title: 'Tango Viajes (No Country)',
      description: 'Plataforma de servicios turísticos para la gestión y venta de pasajes aéreos y terrestres en Argentina. Enfocado en la optimización de reservas. Desarrollado con Angular, Spring Boot y MySQL.',
      link: 'https://github.com/MaxiFusco/C11-16-FT-JavaAngular',
      image: '/assets/tangoviajes.png'
    },
    {
      title: 'API-Rest Agenda',
      description: 'Servicio Backend para la gestión segura de credenciales. Incluye módulos de autenticación, persistencia de datos y operaciones CRUD. Desarrollado con Java (Spring Boot) y MySQL.',
      link: 'https://github.com/MaxiFusco/API_programacion2',
      image: '/assets/agenda.png'
    },
    {
      title: 'A-Labur-AR',
      description: 'Plataforma de intermediación laboral para la gestión de vacantes y perfiles profesionales. Proyecto enfocado en la vinculación entre empresas y talento local. Desarrollado con PHP y Javascript.',
      link: 'https://github.com/MaxiFusco/Practicas-Profesionalizantes-I',
      image: '/assets/A-Labur-AR.png'
    }
  ];
}