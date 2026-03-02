import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

@Component({
  selector: 'app-leisure',
  imports: [RouterLink, ParallaxDirective, ScrollAnimateDirective],
  templateUrl: './leisure.html',
  styleUrl: './leisure.scss'
})
export class Leisure {
  private sanitizer = inject(DomSanitizer);
  private svg(raw: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  spaItems = [
    'Руська баня, фінська сауна та хамам (турецька лазня) — 600 грн/год',
    'Класичний та арома-масаж від досвідчених майстрів',
    'Масаж обличчя та б\'юті-процедури',
    'Б\'юті-салон: стрижка, манікюр, укладка',
    'Басейн 3×8 м різної глибини — безкоштовно для гостей'
  ];

  services: { icon: SafeHtml; title: string; desc: string }[] = [
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/></svg>'),
      title: 'Басейн',
      desc: 'SPA-комплекс 300 м². Басейн 3×8 м різної глибини. Безкоштовно для гостей готелю.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>'),
      title: 'Сауна & Хамам',
      desc: 'Руська баня, фінська сауна та турецька лазня (хамам). Оренда — 600 грн/год.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>'),
      title: 'Масаж & Б\'юті',
      desc: 'Класичний та арома-масаж. Б\'юті-салон: стрижка, манікюр, укладка від майстрів.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="11.5" cy="14" r="1" fill="currentColor" stroke="none"/></svg>'),
      title: 'Боулінг',
      desc: '6 доріжок (2 дитячих). Площа 380 м², 36 місць. Безкоштовно для гостей готелю.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/><path d="M12 12h.01"/></svg>'),
      title: 'Більярд',
      desc: '4 столи: 3 «Російський більярд» + 1 «Пул». 210 м², 16 місць. 1 год безкоштовно.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'),
      title: 'Диско-бочка',
      desc: 'Приватний зал 70 м², 26 місць. Вечірки, дні народження, корпоративні заходи.'
    },
  ];
}
