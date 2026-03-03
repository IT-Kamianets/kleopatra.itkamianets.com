import { Component, signal, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TranslationService } from '../../core/translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-menu',
  imports: [NgClass, RouterLink, ScrollAnimateDirective, TranslatePipe],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  activeGroup = signal('all');
  svc = inject(TranslationService);

  groups = computed(() => this.svc.translations().menu.groups);
  sections = computed(() => this.svc.translations().menu.sections);

  filteredSections = computed(() => {
    const group = this.activeGroup();
    const all = this.sections();
    if (group === 'all') return all;
    return all.filter(s => s.group === group);
  });

  setGroup(id: string): void {
    this.activeGroup.set(id);
    const tabsEl = document.getElementById('menu-tabs');
    if (!tabsEl) return;
    const headerH = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 80;
    // Use hero (previousElementSibling) — not the sticky filter itself,
    // because sticky element's getBCR().top is always == stickyTop when stuck
    const heroEl = tabsEl.previousElementSibling as HTMLElement;
    const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom + window.scrollY : 0;
    const targetY = heroBottom - headerH;
    if (window.scrollY > targetY) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }
}
