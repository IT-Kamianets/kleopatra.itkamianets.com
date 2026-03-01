import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-biznes',
  imports: [RouterLink],
  templateUrl: './biznes.html',
  styleUrl: './biznes.scss'
})
export class Biznes implements AfterViewInit {
  services = [
    { icon: '🏛️', title: 'Конференц-зал', desc: '160 місць, 160 м². Проектор Canon, екран 4×3, радіомікрофон FBT, звук у стелі. 6 000 грн/день.' },
    { icon: '📊', title: 'Зал презентацій', desc: '30–60 місць, 100 м². 2 плазми Samsung, 12 моніторів LG, ПК Core i5. 3 000 грн/день.' },
    { icon: '🖥️', title: 'Офіс-центр', desc: '10 місць, 40 м². Кольоровий БФП А4 HP/Samsung, монохромний Minolta А3, ноутбуки.' },
    { icon: '🎧', title: 'Синхронний переклад', desc: 'Система Williams Sound IS-2 з 50 комплектами навушників для міжнародних конференцій.' },
    { icon: '☕', title: 'Кава-брейки та ланчі', desc: 'Організація кава-брейків та ділових ланчів від ресторану «За Тином».' },
    { icon: '🌐', title: 'Wi-Fi та сервіс', desc: 'Зона Wi-Fi по всій будівлі. Послуги офіс-менеджера. Паркінг для учасників.' },
  ];

  conferenceSpecs = [
    { label: 'Місткість', value: 'до 160 осіб' },
    { label: 'Площа', value: '160 м²' },
    { label: 'Вартість', value: '6 000 грн/день' },
    { label: 'Мікрофон', value: 'Радіо FBT' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
