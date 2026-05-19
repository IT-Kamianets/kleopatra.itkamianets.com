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
  readonly googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Hotel%20Kleopatra%2C%20Tatarska%2019%2C%20Kamianets-Podilskyi';
  svc = inject(TranslationService);
  links = computed(() => this.svc.translations().footer.links);
}
