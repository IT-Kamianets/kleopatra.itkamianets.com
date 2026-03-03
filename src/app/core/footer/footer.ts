import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();
  svc = inject(TranslationService);
  links = computed(() => this.svc.translations().footer.links);
}
