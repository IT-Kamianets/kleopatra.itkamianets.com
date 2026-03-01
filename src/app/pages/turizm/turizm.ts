import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-turizm',
  imports: [RouterLink],
  templateUrl: './turizm.html',
  styleUrl: './turizm.scss'
})
export class Turizm implements AfterViewInit {
  attractions = [
    {
      icon: '🏰',
      name: 'Стара фортеця',
      desc: 'Пам\'ятка архітектури XV–XVII ст. Одна з найвизначніших фортифікаційних споруд Східної Європи. Поруч із готелем.',
      distance: '0.5 км'
    },
    {
      icon: '🌊',
      name: 'Каньйон річки Смотрич',
      desc: 'Унікальний витвір природи з 2 000 000-річною історією. Кандидат до списку культурної спадщини ЮНЕСКО.',
      distance: '0.3 км'
    },
    {
      icon: '⛪',
      name: 'Кафедральний костел',
      desc: 'Рідкісна культова споруда, що поєднує в архітектурі два різних релігійних стилі: Апостолів Петра і Павла.',
      distance: '0.7 км'
    },
    {
      icon: '🏛️',
      name: 'Ратуша (Польський магістрат)',
      desc: 'Найдавніша адміністративна будівля України, що збереглась із XVI ст. Один із символів міста.',
      distance: '0.5 км'
    },
    {
      icon: '🌉',
      name: 'Замковий міст',
      desc: 'Найдавніший міст України — між двома правими берегами річки Смотрич. Символ Кам\'янця-Подільського.',
      distance: '0.6 км'
    },
    {
      icon: '🌁',
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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
