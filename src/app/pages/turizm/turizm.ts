import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

@Component({
  selector: 'app-turizm',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './turizm.html',
  styleUrl: './turizm.scss'
})
export class Turizm {
  private sanitizer = inject(DomSanitizer);
  private svg(raw: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  attractions: { icon: SafeHtml; name: string; desc: string; distance: string }[] = [
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M18 11V4h-4v2h-4V4H6v7"/><path d="M15 22v-4a3 3 0 0 0-3-3 3 3 0 0 0-3 3v4"/></svg>'),
      name: 'Стара фортеця',
      desc: 'Пам\'ятка архітектури XV–XVII ст. Одна з найвизначніших фортифікаційних споруд Східної Європи. Поруч із готелем.',
      distance: '0.5 км'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/></svg>'),
      name: 'Каньйон річки Смотрич',
      desc: 'Унікальний витвір природи з 2 000 000-річною історією. Кандидат до списку культурної спадщини ЮНЕСКО.',
      distance: '0.3 км'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="M18 22V5l-6-3-6 3v17"/><path d="M12 7v5"/><path d="M10 9h4"/></svg>'),
      name: 'Кафедральний костел',
      desc: 'Рідкісна культова споруда, що поєднує в архітектурі два різних релігійних стилі: Апостолів Петра і Павла.',
      distance: '0.7 км'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>'),
      name: 'Ратуша (Польський магістрат)',
      desc: 'Найдавніша адміністративна будівля України, що збереглась із XVI ст. Один із символів міста.',
      distance: '0.5 км'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 12H2"/><path d="M22 12h-2"/><path d="M4 12a8 8 0 0 1 16 0"/><line x1="4" y1="12" x2="4" y2="20"/><line x1="20" y1="12" x2="20" y2="20"/><line x1="2" y1="20" x2="22" y2="20"/></svg>'),
      name: 'Замковий міст',
      desc: 'Найдавніший міст України — між двома правими берегами річки Смотрич. Символ Кам\'янця-Подільського.',
      distance: '0.6 км'
    },
    {
      icon: this.svg('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>'),
      name: 'Міст «Стрімка лань»',
      desc: 'Найвищий безопорний міст в Україні. Під час свят тут пролітають повітряні кулі — незабутнє видовище.',
      distance: '1.5 км'
    },
  ];

  tours = [
    { name: 'Тур «7 чудес Кам\'янця»', duration: '3 години', price: 'за запитом', group: 'до 20 осіб' },
    { name: 'Стара фортеця та каньйон', duration: '4 години', price: 'за запитом', group: 'до 20 осіб' },
    { name: 'Індивідуальна екскурсія', duration: '2–6 годин', price: 'за запитом', group: '1–6 осіб' },
  ];
}
