import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

@Component({
  selector: 'app-biznes',
  imports: [RouterLink, ParallaxDirective, ScrollAnimateDirective],
  templateUrl: './biznes.html',
  styleUrl: './biznes.scss'
})
export class Biznes {
  private sanitizer = inject(DomSanitizer);
  private svg(raw: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  services: { icon: SafeHtml; title: string; desc: string }[] = [
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>'),
      title: 'Конференц-зал',
      desc: '160 місць, 160 м². Проектор Canon, екран 4×3, радіомікрофон FBT, звук у стелі. 6 000 грн/день.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>'),
      title: 'Зал презентацій',
      desc: '30–60 місць, 100 м². 2 плазми Samsung, 12 моніторів LG, ПК Core i5. 3 000 грн/день.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'),
      title: 'Офіс-центр',
      desc: '10 місць, 40 м². Кольоровий БФП А4 HP/Samsung, монохромний Minolta А3, ноутбуки.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>'),
      title: 'Синхронний переклад',
      desc: 'Система Williams Sound IS-2 з 50 комплектами навушників для міжнародних конференцій.'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>'),
      title: 'Кава-брейки та ланчі',
      desc: 'Організація кава-брейків та ділових ланчів від ресторану «За Тином».'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="0.5" fill="currentColor" stroke="none"/></svg>'),
      title: 'Wi-Fi та сервіс',
      desc: 'Зона Wi-Fi по всій будівлі. Послуги офіс-менеджера. Паркінг для учасників.'
    },
  ];

  conferenceSpecs = [
    { label: 'Місткість', value: 'до 160 осіб' },
    { label: 'Площа', value: '160 м²' },
    { label: 'Вартість', value: '6 000 грн/день' },
    { label: 'Мікрофон', value: 'Радіо FBT' },
  ];
}
