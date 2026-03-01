import { Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Номери', path: '/numbers' },
    { label: 'Ресторан', path: '/restaurants' },
    { label: 'Дозвілля', path: '/leisure' },
    { label: 'Бізнес', path: '/biznes' },
    { label: 'Туризм', path: '/turizm' },
    { label: 'Галерея', path: '/gallery' },
    { label: 'Контакти', path: '/contacts' },
  ];

  ngOnInit(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
