import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

interface Room {
  id: number;
  category: string;
  name: string;
  price: string;
  size: string;
  capacity: string;
  image: string;
  features: string[];
  badge?: string;
}

@Component({
  selector: 'app-numbers',
  imports: [NgClass, RouterLink, ScrollAnimateDirective],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss'
})
export class Numbers {
  activeCategory = signal('all');

  categories = [
    { id: 'all', label: 'Усі номери' },
    { id: 'standard', label: 'Стандарт' },
    { id: 'lux', label: 'Люкс' },
    { id: 'biznes', label: 'Бізнес' },
    { id: 'vip', label: 'VIP' },
  ];

  rooms: Room[] = [
    {
      id: 1, category: 'standard', name: 'Стандарт Економний', price: 'Від 1 700 грн',
      size: '23–29 м²', capacity: '1–2 гості',
      image: 'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/standart_prew_thumb_medium300_119.jpg',
      features: ['Wi-Fi', 'TV супутник', 'Кондиціонер', 'Сейф', 'Фен'],
    },
    {
      id: 2, category: 'standard', name: 'Стандарт Класичний', price: 'Від 1 900 грн',
      size: '32–34 м²', capacity: '1–2 гості',
      image: 'assets/img/rooms/standart-clasik.jpeg',
      features: ['Wi-Fi', 'TV супутник', 'Кондиціонер', 'Сейф', 'Душ/гідробокс'],
    },
    {
      id: 3, category: 'standard', name: 'Стандарт Оптимальний', price: 'Від 2 300 грн',
      size: '36–44 м²', capacity: '1–3 гості',
      image: 'assets/img/rooms/standart-optimal.jpeg',
      features: ['Wi-Fi', 'TV супутник', 'Балкон', 'Розкладний диван', 'Сейф'],
      badge: 'З балконом'
    },
    {
      id: 4, category: 'lux', name: 'Люкс Класичний', price: 'Від 2 600 грн',
      size: '48 м²', capacity: '2 гості',
      image: 'assets/img/rooms/luks-klasychnyi.jpeg',
      features: ['Wi-Fi', '2× Плазма TV', 'Душ/гідробокс', '2 кімнати', 'Сніданок'],
      badge: 'Популярний'
    },
    {
      id: 5, category: 'lux', name: 'Люкс Оптимальний', price: 'Від 2 600 грн',
      size: '44–58 м²', capacity: '2 гості',
      image: 'assets/img/rooms/luks-optymalnyi.jpeg',
      features: ['Wi-Fi', 'TV', 'Балкон', 'Розкладний диван', 'Сніданок'],
      badge: 'З балконом'
    },
    {
      id: 6, category: 'lux', name: 'Люкс Сімейний', price: 'Від 2 600 грн',
      size: '58 м²', capacity: '2–4 гості',
      image: 'assets/img/rooms/luks-simeinyi.jpg',
      features: ['Wi-Fi', 'TV', '2 кімнати', 'Дитяче ліжко', 'Сніданок'],
      badge: 'Сімейний'
    },
    {
      id: 7, category: 'biznes', name: 'Бізнес Панорамний', price: 'Від 3 300 грн',
      size: '42–60 м²', capacity: '2 гості',
      image: 'assets/img/rooms/biznes-panorama.jpg',
      features: ['Wi-Fi', 'TV', 'Ванна з гідромасажем', 'Вид на фортецю', 'Сніданок'],
      badge: 'Вид на фортецю'
    },
    {
      id: 8, category: 'vip', name: 'Апартаменти VIP', price: 'Від 5 000 грн',
      size: '80 м²', capacity: '2–4 гості',
      image: 'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezidentskiy.jpg',
      features: ['Wi-Fi', 'TV', 'Кухня та бар', 'Подвійна ванна з гідромасажем', 'Балкон', 'Паркінг'],
      badge: 'VIP'
    }
  ];

  get filteredRooms(): Room[] {
    if (this.activeCategory() === 'all') return this.rooms;
    return this.rooms.filter(r => r.category === this.activeCategory());
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

}
