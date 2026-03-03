import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TranslationService } from '../../core/translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-restaurants',
  imports: [RouterLink, ParallaxDirective, ScrollAnimateDirective, TranslatePipe],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.scss'
})
export class Restaurants {
  svc = inject(TranslationService);
  halls = computed(() => this.svc.translations().restaurants.halls);
  hours = computed(() => this.svc.translations().restaurants.hours);
}
