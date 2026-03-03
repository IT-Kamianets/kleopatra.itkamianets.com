import { Component, signal, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TranslationService } from '../../core/translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-numbers',
  imports: [NgClass, RouterLink, ScrollAnimateDirective, TranslatePipe],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss'
})
export class Numbers {
  activeCategory = signal('all');
  svc = inject(TranslationService);

  categories = computed(() => this.svc.translations().numbers.categories);
  rooms = computed(() => this.svc.translations().numbers.rooms);

  filteredRooms = computed(() => {
    const cat = this.activeCategory();
    const all = this.rooms();
    if (cat === 'all') return all;
    return all.filter(r => r.category === cat);
  });

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
    const filterEl = document.getElementById('numbers-filter');
    if (!filterEl) return;
    const headerH = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 64;
    // Use hero (previousElementSibling) — not the sticky filter itself,
    // because sticky element's getBCR().top is always == stickyTop when stuck
    const heroEl = filterEl.previousElementSibling as HTMLElement;
    const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom + window.scrollY : 0;
    const targetY = heroBottom - headerH;
    if (window.scrollY > targetY) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }
}
