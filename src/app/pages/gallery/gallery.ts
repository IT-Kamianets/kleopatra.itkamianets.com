import { Component, AfterViewInit, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [NgClass],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit {
  activeCategory = signal('all');
  lightboxIndex = signal(-1);

  categories = [
    { id: 'all', label: 'Всі' },
    { id: 'hotel', label: 'Готель' },
    { id: 'rooms', label: 'Номери' },
    { id: 'restaurant', label: 'Ресторан' },
    { id: 'exterior', label: 'Бізнес & SPA' },
  ];

  items: GalleryItem[] = [
    { id: 1, category: 'hotel', alt: 'Готель Клеопатра', src: 'https://kleopatra-hotel.com/images/Slide/Index/3.jpg' },
    { id: 2, category: 'hotel', alt: 'Готель Клеопатра — атмосфера', src: 'https://kleopatra-hotel.com/images/Slide/Index/4.jpg' },
    { id: 3, category: 'hotel', alt: 'Готель Клеопатра — інтер\'єр', src: 'https://kleopatra-hotel.com/images/Slide/Index/5.jpg' },
    { id: 4, category: 'hotel', alt: 'Готель Клеопатра — вигляд', src: 'https://kleopatra-hotel.com/images/Slide/Index/6.jpg' },
    { id: 5, category: 'rooms', alt: 'Стандартний номер', src: 'https://kleopatra-hotel.com/images/Slide/Hotel/3.jpg' },
    { id: 6, category: 'rooms', alt: 'Номер Люкс', src: 'https://kleopatra-hotel.com/images/stories/stare_misto/lux/luks_prev_thumb_medium300_119.jpg' },
    { id: 7, category: 'rooms', alt: 'Стандарт — інтер\'єр', src: 'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/standart_prew_thumb_medium300_119.jpg' },
    { id: 8, category: 'rooms', alt: 'Бізнес-панорамний номер', src: 'https://kleopatra-hotel.com/images/stories/stare_misto/bussines/Golovna_5_thumb_medium300_119.jpg' },
    { id: 9, category: 'rooms', alt: 'Апартаменти VIP', src: 'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezidentskiy.jpg' },
    { id: 10, category: 'restaurant', alt: 'Ресторан «За Тином»', src: 'https://kleopatra-hotel.com/images/Slide/restorans/1.jpg' },
    { id: 11, category: 'restaurant', alt: 'Ресторан — великий зал', src: 'https://kleopatra-hotel.com/images/Slide/restorans/2.jpg' },
    { id: 12, category: 'restaurant', alt: 'Ресторан — затишна зала', src: 'https://kleopatra-hotel.com/images/Slide/restorans/3.jpg' },
    { id: 13, category: 'restaurant', alt: 'Тераса ресторану', src: 'https://kleopatra-hotel.com/images/Slide/restorans/5.jpg' },
    { id: 14, category: 'exterior', alt: 'Бізнес-центр', src: 'https://kleopatra-hotel.com/images/Slide/Busines/Biznes_Konfer_2.jpg' },
    { id: 15, category: 'exterior', alt: 'Конференц-зал', src: 'https://kleopatra-hotel.com/images/Slide/Busines/Biznes_U-Konfer_1.jpg' },
    { id: 16, category: 'exterior', alt: 'SPA та дозвілля', src: 'https://kleopatra-hotel.com/images/Slide/relacs/1.jpg' },
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory() === 'all') return this.items;
    return this.items.filter(i => i.category === this.activeCategory());
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxIndex.set(-1);
    document.body.style.overflow = '';
  }

  prevImage(): void {
    const items = this.filteredItems;
    this.lightboxIndex.update(i => (i - 1 + items.length) % items.length);
  }

  nextImage(): void {
    const items = this.filteredItems;
    this.lightboxIndex.update(i => (i + 1) % items.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.lightboxIndex() === -1) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
