import { Component, OnDestroy, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [NgClass, ScrollAnimateDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements OnDestroy {
  activeCategory = signal('all');
  lightboxIndex = signal(-1);
  private touchStartX = 0;

  categories = [
    { id: 'all',        label: 'Всі' },
    { id: 'hotel',      label: 'Готель' },
    { id: 'rooms',      label: 'Номери' },
    { id: 'restaurant', label: 'Ресторан' },
    { id: 'events',     label: 'Заходи' },
  ];

  items: GalleryItem[] = [
    // Hotel (12)
    { id: 1,  category: 'hotel', alt: 'Готель Клеопатра — DSC 1',      src: 'assets/img/gallery/dsc-01.jpg' },
    { id: 2,  category: 'hotel', alt: 'Готель Клеопатра — DSC 2',      src: 'assets/img/gallery/dsc-02.jpg' },
    { id: 3,  category: 'hotel', alt: 'Готель Клеопатра — DSC 3',      src: 'assets/img/gallery/dsc-03.jpg' },
    { id: 4,  category: 'hotel', alt: 'Готель Клеопатра — DSC 4',      src: 'assets/img/gallery/dsc-04.jpg' },
    { id: 5,  category: 'hotel', alt: 'Готель Клеопатра — екстер\'єр', src: 'assets/img/gallery/exterior.jpg' },
    { id: 6,  category: 'hotel', alt: 'Готель Клеопатра — панорама',   src: 'assets/img/gallery/panorama.jpeg' },
    { id: 7,  category: 'hotel', alt: 'Готель Клеопатра — Instagram 1', src: 'assets/img/gallery/insta-1.jpg' },
    { id: 8,  category: 'hotel', alt: 'Готель Клеопатра — Instagram 2', src: 'assets/img/gallery/insta-2.jpg' },
    { id: 9,  category: 'hotel', alt: 'Готель Клеопатра — Instagram 3', src: 'assets/img/gallery/insta-3.jpg' },
    { id: 10, category: 'hotel', alt: 'Готель Клеопатра — фото 1',     src: 'assets/img/gallery/misc-01.jpg' },
    { id: 11, category: 'hotel', alt: 'Готель Клеопатра — фото 2',     src: 'assets/img/gallery/misc-02.jpg' },
    { id: 12, category: 'hotel', alt: 'Готель Клеопатра — фото 3',     src: 'assets/img/gallery/misc-03.jpg' },

    // Rooms (12)
    { id: 13, category: 'rooms', alt: 'Номер — DSC 5',               src: 'assets/img/gallery/dsc-05.jpg' },
    { id: 14, category: 'rooms', alt: 'Номер — DSC 6',               src: 'assets/img/gallery/dsc-06.jpg' },
    { id: 15, category: 'rooms', alt: 'Номер — DSC 7',               src: 'assets/img/gallery/dsc-07.jpg' },
    { id: 16, category: 'rooms', alt: 'Номер — DSC 8',               src: 'assets/img/gallery/dsc-08.jpg' },
    { id: 17, category: 'rooms', alt: 'Номер — DSC 9',               src: 'assets/img/gallery/dsc-09.jpg' },
    { id: 18, category: 'rooms', alt: 'Люкс Класичний',              src: 'assets/img/gallery/luks-klasychnyi.jpeg' },
    { id: 19, category: 'rooms', alt: 'Люкс Оптимальний — 1',       src: 'assets/img/gallery/luks-optymalnyi-1.jpeg' },
    { id: 20, category: 'rooms', alt: 'Люкс Оптимальний — 2',       src: 'assets/img/gallery/luks-optymalnyi-2.jpg' },
    { id: 21, category: 'rooms', alt: 'Люкс — переднє фото',        src: 'assets/img/gallery/luks-prev.jpg' },
    { id: 22, category: 'rooms', alt: 'Стандарт Класичний',         src: 'assets/img/gallery/standart-clasik.jpeg' },
    { id: 23, category: 'rooms', alt: 'Стандарт Оптимальний',       src: 'assets/img/gallery/standart-optimal.jpeg' },
    { id: 24, category: 'rooms', alt: 'Бізнес Панорамний',          src: 'assets/img/gallery/biznes-panorama.jpg' },

    // Restaurant (7)
    { id: 25, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 10', src: 'assets/img/gallery/dsc-10.jpg' },
    { id: 26, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 11', src: 'assets/img/gallery/dsc-11.jpg' },
    { id: 27, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 12', src: 'assets/img/gallery/dsc-12.jpg' },
    { id: 28, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 13', src: 'assets/img/gallery/dsc-13.jpg' },
    { id: 29, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 14', src: 'assets/img/gallery/dsc-14.jpg' },
    { id: 30, category: 'restaurant', alt: 'Ресторан «За Тином» — DSC 15', src: 'assets/img/gallery/dsc-15.jpg' },
    { id: 31, category: 'hotel',      alt: 'Готель Клеопатра — екстер\'єр, ворота', src: 'assets/img/gallery/dsc-16.jpg' },

    // Events (36)
    { id: 32, category: 'events', alt: 'Захід — грудень 2022',     src: 'assets/img/gallery/event-001.jpg' },
    { id: 33, category: 'events', alt: 'Захід — грудень 2022',     src: 'assets/img/gallery/event-002.jpg' },
    { id: 34, category: 'events', alt: 'Захід — грудень 2022',     src: 'assets/img/gallery/event-003.jpg' },
    { id: 35, category: 'events', alt: 'Захід — липень 2023',      src: 'assets/img/gallery/event-004.jpg' },
    { id: 36, category: 'events', alt: 'Захід — липень 2023',      src: 'assets/img/gallery/event-005.jpg' },
    { id: 37, category: 'events', alt: 'Захід — липень 2023',      src: 'assets/img/gallery/event-006.jpg' },
    { id: 38, category: 'events', alt: 'Захід — липень 2023',      src: 'assets/img/gallery/event-007.jpg' },
    { id: 39, category: 'events', alt: 'Захід — серпень 2023',     src: 'assets/img/gallery/event-008.jpg' },
    { id: 40, category: 'events', alt: 'Захід — вересень 2023',    src: 'assets/img/gallery/event-009.jpg' },
    { id: 41, category: 'events', alt: 'Захід — жовтень 2023',     src: 'assets/img/gallery/event-010.jpg' },
    { id: 42, category: 'events', alt: 'Захід — грудень 2023',     src: 'assets/img/gallery/event-011.jpg' },
    { id: 43, category: 'events', alt: 'Захід — січень 2024',      src: 'assets/img/gallery/event-012.jpg' },
    { id: 44, category: 'events', alt: 'Захід — січень 2024',      src: 'assets/img/gallery/event-013.jpg' },
    { id: 45, category: 'events', alt: 'Захід — березень 2024',    src: 'assets/img/gallery/event-014.jpg' },
    { id: 46, category: 'events', alt: 'Захід — березень 2024',    src: 'assets/img/gallery/event-015.jpg' },
    { id: 47, category: 'events', alt: 'Захід — травень 2024',     src: 'assets/img/gallery/event-016.jpg' },
    { id: 48, category: 'events', alt: 'Захід — травень 2024',     src: 'assets/img/gallery/event-017.jpg' },
    { id: 49, category: 'events', alt: 'Захід — червень 2024',     src: 'assets/img/gallery/event-018.jpg' },
    { id: 50, category: 'events', alt: 'Захід — серпень 2024',     src: 'assets/img/gallery/event-019.jpg' },
    { id: 51, category: 'events', alt: 'Захід — вересень 2024',    src: 'assets/img/gallery/event-020.jpg' },
    { id: 52, category: 'events', alt: 'Захід — вересень 2024',    src: 'assets/img/gallery/event-021.jpg' },
    { id: 53, category: 'events', alt: 'Захід — квітень 2025',     src: 'assets/img/gallery/event-022.jpg' },
    { id: 54, category: 'events', alt: 'Захід — серпень 2025',     src: 'assets/img/gallery/event-023.jpg' },
    { id: 55, category: 'events', alt: 'Захід — серпень 2025',     src: 'assets/img/gallery/event-024.jpg' },
    { id: 56, category: 'events', alt: 'Захід — вересень 2025',    src: 'assets/img/gallery/event-025.jpg' },
    { id: 57, category: 'events', alt: 'Захід — вересень 2025',    src: 'assets/img/gallery/event-026.jpg' },
    { id: 58, category: 'events', alt: 'Захід — жовтень 2025',     src: 'assets/img/gallery/event-027.jpg' },
    { id: 59, category: 'events', alt: 'Захід — листопад 2025',    src: 'assets/img/gallery/event-028.jpg' },
    { id: 60, category: 'events', alt: 'Захід — листопад 2025',    src: 'assets/img/gallery/event-029.jpg' },
    { id: 61, category: 'events', alt: 'Захід — грудень 2025',     src: 'assets/img/gallery/event-030.jpg' },
    { id: 62, category: 'events', alt: 'Захід — січень 2026',      src: 'assets/img/gallery/event-031.jpg' },
    { id: 63, category: 'events', alt: 'Захід — січень 2026',      src: 'assets/img/gallery/event-032.jpg' },
    { id: 64, category: 'events', alt: 'Захід — січень 2026',      src: 'assets/img/gallery/event-033.jpg' },
    { id: 65, category: 'events', alt: 'Захід — січень 2026',      src: 'assets/img/gallery/event-034.jpg' },
    { id: 66, category: 'events', alt: 'Захід — лютий 2026',       src: 'assets/img/gallery/event-035.jpg' },
    { id: 67, category: 'events', alt: 'Захід — лютий 2026',       src: 'assets/img/gallery/event-036.jpg' },
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory() === 'all') return this.items;
    return this.items.filter(i => i.category === this.activeCategory());
  }

  setCategory(cat: string): void {
    if (this.lightboxIndex() >= 0) {
      this.closeLightbox();
    }
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

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(e: TouchEvent): void {
    const delta = e.changedTouches[0].screenX - this.touchStartX;
    if (Math.abs(delta) > 50 && this.lightboxIndex() >= 0) {
      delta < 0 ? this.nextImage() : this.prevImage();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.lightboxIndex() === -1) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }

  ngOnDestroy(): void {
    if (this.lightboxIndex() >= 0) {
      document.body.style.overflow = '';
    }
  }

}
