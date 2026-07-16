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
      title: 'Mye Software',
      description: 'Agencia independiente que ofrece soluciones tecnológicas a medida para pequeñas empresas, gestionando el ciclo de vida completo del desarrollo Full Stack.',
      link: 'https://myesoftware.com.ar',
      image: '/assets/mye.png',
      tags: ['Java', 'Spring Boot', 'Angular', 'SQL']
    },
    {
      title: 'Ruedas Compartidas',
      description: 'Ecosistema digital para la gestión logística de alquiler de vehículos. Implementa un motor de reservas robusto y gestión documental de activos.',
      link: 'https://github.com/MaxiFusco/RuedasCompartidas',
      image: '/assets/ruedas.png',
      tags: ['Spring Boot', 'React', 'MySQL']
    },
    {
      title: 'De Latinos (No Country)',
      description: 'Plataforma E-commerce para la exportación de productos latinoamericanos al mercado europeo. Gestión integral de logística y envíos.',
      link: 'https://github.com/MaxiFusco/s9-07-ft-java-angular',
      image: '/assets/delatinos.png',
      tags: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'GymFit',
      description: 'Sistema de gestión para centros de salud y fitness. Permite la administración de rutinas, planes nutricionales y catálogo de productos.',
      link: 'https://github.com/MaxiFusco/GymFit',
      image: '/assets/gymfit.png',
      tags: ['React', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Tango Viajes (No Country)',
      description: 'Plataforma de servicios turísticos para la gestión y venta de pasajes aéreos y terrestres en Argentina. Enfocado en la optimización de reservas.',
      link: 'https://github.com/MaxiFusco/C11-16-FT-JavaAngular',
      image: '/assets/tangoviajes.png',
      tags: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'API-Rest Agenda',
      description: 'Servicio Backend para la gestión segura de credenciales. Incluye módulos de autenticación, persistencia de datos y operaciones CRUD.',
      link: 'https://github.com/MaxiFusco/API_programacion2',
      image: '/assets/agenda.png',
      tags: ['Java', 'Spring Boot', 'Security']
    },
    {
      title: 'A-Labur-AR',
      description: 'Plataforma de intermediación laboral para la gestión de vacantes y perfiles profesionales, vinculando empresas con talento local.',
      link: 'https://github.com/MaxiFusco/Practicas-Profesionalizantes-I',
      image: '/assets/A-Labur-AR.png',
      tags: ['PHP', 'JavaScript', 'MySQL']
    }
  ];
}