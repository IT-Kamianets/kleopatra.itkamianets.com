import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  imports: [RouterLink],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.scss'
})
export class Restaurants implements AfterViewInit {
  halls = [
    { name: '«Перлинова»', type: 'Великий зал', desc: 'Банкети, весілля, концерти до 100 осіб. Атмосфера класики.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/perluna_thumb300_119.jpg' },
    { name: '«Кришталева»', type: 'Великий зал', desc: 'Урочисті прийоми, шведська лінія. Атмосфера класики.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/vesina_thumb300_119.jpg' },
    { name: '«Зимовий сад»', type: 'Мала зала', desc: 'Атмосфера затишку посеред міста XVII ст. Особливо вечорами.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/zumsad/1_thumb300_119.jpg' },
    { name: '«Мисливська»', type: 'Мала зала', desc: 'Атмосфера середньовічного банкету. Дегустації, корпоративи.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/musluvska_thumb300_119.jpg' },
    { name: '«Кам\'яниця»', type: 'Мала зала', desc: 'Середньовічна атмосфера. Пивні вечірки, тематичні заходи.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/kamyana_thumb300_119.jpg' },
    { name: '«Дерев\'яна»', type: 'Мала зала', desc: 'Атмосфера ірландського пабу. Чаювання, кавові посиденьки.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/derevo/1_thumb300_119.jpg' },
  ];

  menuItems = [
    {
      category: 'Гарячі закуски',
      items: [
        { name: 'Деруни з м\'ясною піджаркою', desc: 'Традиційна українська страва', price: '180 грн' },
        { name: 'Жульєн з курки та грибів', desc: 'Вершковий соус, запечений у порційній формі', price: '140 грн' },
        { name: 'Мідії у вершково-часниковому соусі', desc: 'Подається з грінками', price: '220 грн' },
        { name: 'Піца «Гавайська»', desc: 'Курка, кукурудза, ананас, помідор, сир, соус', price: '280 грн' },
        { name: 'Піца «Чотири сири»', desc: 'Авторський мікс сирів', price: '300 грн' },
      ]
    },
    {
      category: 'Холодні закуски',
      items: [
        { name: 'Капрезе', desc: 'Моцарела, помідори, соус песто', price: '170 грн' },
        { name: 'Тартар з телятини', desc: 'Телятина, цибуля, гірчиця, яйце, каперси', price: '310 грн' },
        { name: 'Карпаччо з телятини', desc: 'Листя салату, помідори черрі, пармезан', price: '310 грн' },
        { name: 'Карпаччо Фіш', desc: 'Ансамбль червоної риби, мікс салату, каперси, пармезан', price: '340 грн' },
        { name: 'Рибне асорті', desc: 'Масляна х/к, сьомга с/с', price: '350 грн' },
        { name: 'Оселедець з цибулею', desc: 'Класична українська закуска', price: '120 грн' },
      ]
    }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
