import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../core/translation/translation.service';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private svc = inject(TranslationService);

  transform(key: string): string {
    return this.svc.t(key);
  }
}
