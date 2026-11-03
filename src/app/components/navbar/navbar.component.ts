import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  links = [
    { label: 'about', href: '#about' },
    { label: 'projects', href: '#projects' },
    { label: 'skills', href: '#skills' },
    { label: 'hobbies', href: '#hobbies' },
    { label: 'contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
