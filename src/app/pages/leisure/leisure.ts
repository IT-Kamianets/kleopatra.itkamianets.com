import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leisure',
  imports: [RouterLink],
  templateUrl: './leisure.html',
  styleUrl: './leisure.scss'
})
export class Leisure implements AfterViewInit {
  spaItems = [
    'Руська баня, фінська сауна та хамам (турецька лазня) — 600 грн/год',
    'Класичний та арома-масаж від досвідчених майстрів',
    'Масаж обличчя та б\'юті-процедури',
    'Б\'юті-салон: стрижка, манікюр, укладка',
    'Басейн 3×8 м різної глибини — безкоштовно для гостей'
  ];

  services = [
    { icon: '🏊', title: 'Басейн', desc: 'SPA-комплекс 300 м². Басейн 3×8 м різної глибини. Безкоштовно для гостей готелю.' },
    { icon: '♨️', title: 'Сауна & Хамам', desc: 'Руська баня, фінська сауна та турецька лазня (хамам). Оренда — 600 грн/год.' },
    { icon: '💆', title: 'Масаж & Б\'юті', desc: 'Класичний та арома-масаж. Б\'юті-салон: стрижка, манікюр, укладка від майстрів.' },
    { icon: '🎳', title: 'Боулінг', desc: '6 доріжок (2 дитячих). Площа 380 м², 36 місць. Безкоштовно для гостей готелю.' },
    { icon: '🎱', title: 'Більярд', desc: '4 столи: 3 «Російський більярд» + 1 «Пул». 210 м², 16 місць. 1 год безкоштовно.' },
    { icon: '🎶', title: 'Диско-бочка', desc: 'Приватний зал 70 м², 26 місць. Вечірки, дні народження, корпоративні заходи.' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
