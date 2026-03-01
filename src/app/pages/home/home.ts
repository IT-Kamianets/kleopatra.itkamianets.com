import { Component, OnInit, OnDestroy, signal, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  currentSlide = signal(0);
  private slideTimer: ReturnType<typeof setInterval> | null = null;

  slides: Slide[] = [
    {
      image: 'https://kleopatra-hotel.com/images/Slide/Index/6.jpg',
      title: 'Готель Клеопатра',
      subtitle: 'Розкіш у серці Кам\'янця-Подільського'
    },
    {
      image: 'https://kleopatra-hotel.com/images/Slide/Hotel/3.jpg',
      title: 'Комфорт & Елегантність',
      subtitle: '82 номери преміум-класу для вашого ідеального відпочинку'
    },
    {
      image: 'https://kleopatra-hotel.com/images/Slide/restorans/3.jpg',
      title: 'Ресторан «За Тином»',
      subtitle: 'Банкети, весілля, сніданки-шведський стіл та тераса'
    },
    {
      image: 'https://kleopatra-hotel.com/cache/preview/73d316d6d8246ef20833e11bdfc2218e.jpg',
      title: 'Відпочинок & Розваги',
      subtitle: 'Боулінг, більярд, басейн, хамам — безкоштовно для гостей'
    }
  ];

  stats = [
    { value: '82+', label: 'Номерів' },
    { value: '13+', label: 'Люксів' },
    { value: '4★', label: 'Зірки' },
    { value: '24/7', label: 'Рецепція' }
  ];

  bentoItems = [
    {
      title: 'Номери',
      desc: '82 номери: Стандарт, Люкс, Бізнес-панорамний, VIP-Апартаменти',
      icon: '🏨',
      path: '/numbers',
      large: true,
      bg: 'https://kleopatra-hotel.com/images/Slide/Hotel/3.jpg'
    },
    {
      title: 'Ресторан',
      desc: 'Ресторан «За Тином» — банкети, сніданки-шведський стіл, тераса',
      icon: '🍽️',
      path: '/restaurants',
      large: false,
      bg: 'https://kleopatra-hotel.com/images/Slide/restorans/1.jpg'
    },
    {
      title: 'Дозвілля',
      desc: 'Басейн, боулінг, більярд, SPA, хамам — безкоштовно для гостей',
      icon: '♨️',
      path: '/leisure',
      large: false,
      bg: 'https://kleopatra-hotel.com/images/Slide/relacs/1.jpg'
    },
    {
      title: 'Бізнес',
      desc: 'Конференц-зал 160 місць, зал презентацій, офіс-центр',
      icon: '💼',
      path: '/biznes',
      large: false,
      bg: 'https://kleopatra-hotel.com/images/Slide/Busines/Biznes_Konfer_2.jpg'
    }
  ];

  ngOnInit(): void {
    this.startSlider();
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  startSlider(): void {
    this.slideTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide.update(i => (i + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentSlide.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.startSlider();
    }
  }

  initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
