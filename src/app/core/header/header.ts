import { Component, HostListener, signal, OnInit, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslationService } from '../translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  svc = inject(TranslationService);

  navItems = computed(() => [
    { label: this.svc.translations().nav.rooms,      path: '/numbers' },
    { label: this.svc.translations().nav.restaurant, path: '/restaurants' },
    { label: this.svc.translations().nav.leisure,    path: '/leisure' },
    { label: this.svc.translations().nav.biznes,     path: '/biznes' },
    { label: this.svc.translations().nav.turizm,     path: '/turizm' },
    { label: this.svc.translations().nav.gallery,    path: '/gallery' },
    { label: this.svc.translations().nav.contacts,   path: '/contacts' },
  ]);

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
