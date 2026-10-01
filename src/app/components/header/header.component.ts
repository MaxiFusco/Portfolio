import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`No se encontró la sección: ${id}`);
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.menuOpen = false;
  }
}
