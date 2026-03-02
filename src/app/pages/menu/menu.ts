import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

interface MenuItem {
  name: string;
  weight?: string;
  desc?: string;
  price: string;
}

interface MenuSection {
  group: string;
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [NgClass, RouterLink, ScrollAnimateDirective],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  activeGroup = signal('all');

  groups = [
    { id: 'all',      label: 'Все меню' },
    { id: 'zakusky',  label: 'Закуски' },
    { id: 'salads',   label: 'Салати' },
    { id: 'soups',    label: 'Перші страви' },
    { id: 'main',     label: 'Основні страви' },
    { id: 'sides',    label: 'Гарніри' },
    { id: 'desserts', label: 'Десерти' },
    { id: 'drinks',   label: 'Напої' },
    { id: 'alcohol',  label: 'Алкоголь' },
  ];

  sections: MenuSection[] = [
    {
      group: 'zakusky',
      title: 'Гарячі закуски',
      items: [
        { name: 'Деруни з м\'ясною піджаркою',            weight: '150/75/50 г', price: '180 грн' },
        { name: 'Жульєн з курки та грибів',               weight: '130 г',       price: '140 грн' },
        { name: 'Мідії у вершково-часниковому соусі',     weight: '100/50 г',    desc: 'Подається з грінками', price: '220 грн' },
        { name: 'Піца «Гавайська»',                       weight: '600 г',       desc: 'Курка, кукурудза, ананас, помідор, сир', price: '280 грн' },
        { name: 'Піца «Чотири сири»',                     weight: '600 г',       desc: 'Авторський мікс сирів', price: '300 грн' },
        { name: 'Піца «Домашня»',                         weight: '600 г',       price: '300 грн' },
      ]
    },
    {
      group: 'zakusky',
      title: 'Холодні закуски',
      items: [
        { name: 'Капрезе',                                weight: '150 г',       desc: 'Моцарела, помідори, соус песто', price: '170 грн' },
        { name: 'Тартар з телятини',                      weight: '200 г',       desc: 'Цибуля, гірчиця, яйце, каперси', price: '310 грн' },
        { name: 'Карпаччо з телятини',                    weight: '200 г',       desc: 'Листя салату, помідори черрі, пармезан', price: '310 грн' },
        { name: 'М\'ясне асорті',                         weight: '100 г',       price: '180 грн' },
        { name: 'Карпаччо Фіш',                           weight: '140 г',       desc: 'Ансамбль червоної риби, мікс салату, каперси, пармезан', price: '340 грн' },
        { name: 'Оселедець з цибулею',                    weight: '100/50 г',    desc: 'Класична українська закуска', price: '120 грн' },
        { name: 'Рибне асорті',                           weight: '100 г',       desc: 'Масляна х/к, сьомга с/с', price: '350 грн' },
        { name: 'Сирне асорті з соусом',                  weight: '100/50 г',    price: '220 грн' },
        { name: 'Нарізка сала з часником і цибулею',      weight: '100 г',       price: '100 грн' },
        { name: 'Канапе асорті (лосось, масляна, ікра)',  weight: '60 г (3 шт)', price: '180 грн' },
        { name: 'Канапе асорті (прошуто, ковбаса)',       weight: '60 г (3 шт)', price: '180 грн' },
      ]
    },
    {
      group: 'salads',
      title: 'Салати',
      items: [
        { name: 'Нісуаз',                                      weight: '220 г', price: '240 грн' },
        { name: 'Міський салат',                               weight: '220 г', price: '190 грн' },
        { name: 'М\'ясний салат «Де Монсоро»',                 weight: '215 г', price: '260 грн' },
        { name: 'Цезар',                                       weight: '210 г', price: '230 грн' },
        { name: 'Салат з перепелиним яйцем та лососем',        weight: '210 г', price: '320 грн' },
        { name: 'Коктейльний салат «Задоволений джентльмен»',  weight: '150 г', price: '270 грн' },
        { name: 'Грецький салат',                              weight: '200 г', price: '190 грн' },
      ]
    },
    {
      group: 'soups',
      title: 'Перші страви',
      items: [
        { name: 'Борщ Український',                                         weight: '300 г', price: '150 грн' },
        { name: 'Грибний суп',                                              weight: '300 г', price: '150 грн' },
        { name: 'Солянка м\'ясна',                                          weight: '300 г', price: '150 грн' },
        { name: 'Курячий бульйон з перепелиним яйцем та домашньою локшиною', weight: '300 г', price: '140 грн' },
      ]
    },
    {
      group: 'main',
      title: 'М\'ясні страви',
      items: [
        { name: 'Стейк зі свинини з запеченими помідорами', weight: '200/100 г', price: '260 грн' },
        { name: 'Свинячі ребра з BBQ соусом',               weight: '100 г',     price: '160 грн' },
        { name: 'Філе індички з овочами',                   weight: '150/100 г', price: '270 грн' },
        { name: 'Качина конфі з яблуками',                  weight: '100 г',     price: '200 грн' },
      ]
    },
    {
      group: 'main',
      title: 'Рибні страви та паста',
      items: [
        { name: 'Сібас, запечений з овочами',              weight: '100 г',         price: '200 грн' },
        { name: 'Філе лосося з пареними овочами',          weight: '120/150/50 г',  price: '450 грн' },
        { name: 'Смажені тигрові креветки в соусі',        weight: '180/50 г',      price: '370 грн' },
        { name: 'Паста Карбонара',                         weight: '300 г',         price: '250 грн' },
        { name: 'Паста з морепродуктами',                  weight: '280 г',         price: '300 грн' },
      ]
    },
    {
      group: 'sides',
      title: 'Гарніри',
      items: [
        { name: 'Картопляне пюре',                    weight: '150 г', price: '90 грн' },
        { name: 'Парові овочі',                       weight: '150 г', price: '120 грн' },
        { name: 'Рис з овочами',                      weight: '150 г', price: '120 грн' },
        { name: 'Картопля по-селянськи з розмарином', weight: '150 г', price: '100 грн' },
        { name: 'Картопля фрі',                       weight: '150 г', price: '110 грн' },
        { name: 'Овочі гриль',                        weight: '150 г', price: '140 грн' },
      ]
    },
    {
      group: 'desserts',
      title: 'Десерти',
      items: [
        { name: 'Шоколад з морозивом',               weight: '100/50 г', price: '170 грн' },
        { name: 'Чізкейк з ягідним соусом',          weight: '120 г',    price: '150 грн' },
        { name: 'Морозиво «Пломбір» з топінгами',    weight: '100 г',    price: '100 грн' },
        { name: 'Морозиво «Пломбір» з фруктами',     weight: '100/50 г', price: '130 грн' },
        { name: 'Панна Котта',                        weight: '40/20 г',  price: '140 грн' },
        { name: 'Фруктовий набір',                    weight: '100 г',    price: '60 грн' },
      ]
    },
    {
      group: 'drinks',
      title: 'Гарячі напої',
      items: [
        { name: 'Еспресо',              weight: '50 мл',  price: '40 грн' },
        { name: 'Еспресо з молоком',    weight: '100 мл', price: '40 грн' },
        { name: 'Американо',            weight: '150 мл', price: '40 грн' },
        { name: 'Американо з молоком',  weight: '200 мл', price: '40 грн' },
        { name: 'Капучіно',             weight: '200 мл', price: '50 грн' },
        { name: 'Латте',                weight: '250 мл', price: '50 грн' },
        { name: 'Чай асорті',           weight: '450 мл', price: '80 грн' },
        { name: 'Гарячий какао',        weight: '200 мл', price: '60 грн' },
      ]
    },
    {
      group: 'drinks',
      title: 'Холодні напої',
      items: [
        { name: 'Моршинська (пластик)',     weight: '500 мл',  price: '50 грн' },
        { name: 'Моршинська (скло)',        weight: '330 мл',  price: '100 грн' },
        { name: 'Боржомі',                 weight: '500 мл',  price: '150 грн' },
        { name: 'Coca-Cola',               weight: '500 мл',  price: '70 грн' },
        { name: 'Fanta',                   weight: '500 мл',  price: '70 грн' },
        { name: 'Sprite',                  weight: '500 мл',  price: '70 грн' },
        { name: 'Schweppes',               weight: '330 мл',  price: '60 грн' },
        { name: 'Фруктовий сік',           weight: '250 мл',  price: '50 грн' },
        { name: 'Фруктовий сік',           weight: '1000 мл', price: '200 грн' },
        { name: 'Компот / Узвар',          weight: '250 мл',  price: '50 грн' },
        { name: 'Компот / Узвар',          weight: '1000 мл', price: '200 грн' },
        { name: 'Безалкогольний Мохіто',   weight: '350 мл',  price: '150 грн' },
        { name: 'Квас / Ситро / Дюшес',   weight: '500 мл',  price: '70 грн' },
      ]
    },
    {
      group: 'alcohol',
      title: 'Пиво розливне',
      items: [
        { name: 'Grimbergen Blanche',        weight: '500 мл', price: '120 грн' },
        { name: 'Grimbergen Blanche',        weight: '330 мл', price: '90 грн' },
        { name: 'Carlsberg',                 weight: '500 мл', price: '75 грн' },
        { name: 'Carlsberg',                 weight: '330 мл', price: '50 грн' },
        { name: 'Carlsberg безалкогольне',   weight: '500 мл', price: '70 грн' },
      ]
    },
    {
      group: 'alcohol',
      title: 'Вина червоні (50 г / пляшка)',
      items: [
        { name: 'Кіндзмараулі',                 desc: 'Грузія',   price: '50 / 750 грн' },
        { name: 'Алазанська долина',             desc: 'Грузія',   price: '30 / 450 грн' },
        { name: 'Сапераві',                      desc: 'Грузія',   price: '30 / 450 грн' },
        { name: 'Le Coursier Rouge',             desc: 'Франція',  price: '40 / 600 грн' },
        { name: 'El Convertido Syrah',           desc: 'Іспанія',  price: '30 / 450 грн' },
        { name: 'Monterey Chardonnay',           desc: 'США',      price: '50 / 750 грн' },
      ]
    },
    {
      group: 'alcohol',
      title: 'Вина білі (50 г / пляшка)',
      items: [
        { name: 'Алазанська долина',             desc: 'Грузія',   price: '30 / 450 грн' },
        { name: 'Цинандалі',                     desc: 'Грузія',   price: '30 / 450 грн' },
        { name: 'Latinium Riesling',             desc: 'Німеччина', price: '40 / 600 грн' },
        { name: 'Le Coursier Blanc',             desc: 'Франція',  price: '40 / 600 грн' },
        { name: 'El Convertido Sauvignon Blanc', desc: 'Іспанія',  price: '30 / 450 грн' },
        { name: 'Monterey Chardonnay',           desc: 'США',      price: '50 / 750 грн' },
      ]
    },
    {
      group: 'alcohol',
      title: 'Вермути та шампанське',
      items: [
        { name: 'Martini Bianco',     desc: 'Італія, 50 г',    price: '40 грн' },
        { name: 'Martini Rosso',      desc: 'Італія, 50 г',    price: '40 грн' },
        { name: 'Артемівське Біле',   desc: 'Україна, пляшка', price: '500 грн' },
        { name: 'Артемівське Брют',   desc: 'Україна, пляшка', price: '500 грн' },
        { name: 'Fragolino Біле',     desc: 'Італія, пляшка',  price: '500 грн' },
        { name: 'Fragolino Червоне',  desc: 'Італія, пляшка',  price: '500 грн' },
        { name: 'Martini Asti',       desc: 'Італія, пляшка',  price: '900 грн' },
      ]
    },
    {
      group: 'alcohol',
      title: 'Міцні напої (50 г)',
      items: [
        { name: 'Prima Gildiya / Lvivska',  desc: 'Горілка · Україна',     price: '40 грн' },
        { name: 'Finlandia',                desc: 'Горілка · Фінляндія',   price: '70 грн' },
        { name: 'Старий Кахеті',            desc: 'Коньяк · Грузія',       price: '70 грн' },
        { name: 'Ararat 5 зірок',           desc: 'Коньяк · Вірменія',     price: '100 грн' },
        { name: 'Hennessy VS',              desc: 'Коньяк · Франція',      price: '260 грн' },
        { name: 'Metaxa',                   desc: 'Коньяк · Греція',       price: '100 грн' },
        { name: 'Beefeater',                desc: 'Джин · Англія',         price: '100 грн' },
        { name: 'Sierra Silver',            desc: 'Текіла · Мексика',      price: '120 грн' },
        { name: 'Jameson',                  desc: 'Віскі · Ірландія',      price: '150 грн' },
        { name: 'Jim Beam',                 desc: 'Віскі · США',           price: '120 грн' },
        { name: 'Jack Daniels',             desc: 'Віскі · США',           price: '150 грн' },
        { name: 'Captain Morgan',           desc: 'Ром · Ямайка',          price: '90 грн' },
        { name: 'Jägermeister',             desc: 'Лікер · Німеччина',     price: '100 грн' },
      ]
    },
  ];

  get filteredSections(): MenuSection[] {
    if (this.activeGroup() === 'all') return this.sections;
    return this.sections.filter(s => s.group === this.activeGroup());
  }

  setGroup(id: string): void {
    this.activeGroup.set(id);
    const el = document.getElementById('menu-tabs');
    if (el) {
      const headerH = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 80;
      window.scrollTo({ top: el.offsetTop - headerH, behavior: 'smooth' });
    }
  }
}
