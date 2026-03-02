import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  private raf: number | null = null;

  private scrollHandler = () => {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.15;
      this.el.nativeElement.style.transform = `translateY(${offset}px) scale(1.15)`;
      this.raf = null;
    });
  };

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.scrollHandler();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
