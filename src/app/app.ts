import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Cursor } from './core/cursor/cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Cursor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(14px)' }),
          animate('380ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class App {
  routeUrl = signal('');

  constructor(router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.routeUrl.set(e.urlAfterRedirects);
    });
  }
}
