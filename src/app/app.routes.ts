import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Готель Клеопатра — Головна'
  },
  {
    path: 'numbers',
    loadComponent: () => import('./pages/numbers/numbers').then(m => m.Numbers),
    title: 'Номери — Готель Клеопатра'
  },
  {
    path: 'numbers/:type',
    loadComponent: () => import('./pages/room-detail/room-detail').then(m => m.RoomDetail),
    title: 'Номер — Готель Клеопатра'
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./pages/restaurants/restaurants').then(m => m.Restaurants),
    title: 'Ресторан — Готель Клеопатра'
  },
  {
    path: 'leisure',
    loadComponent: () => import('./pages/leisure/leisure').then(m => m.Leisure),
    title: 'Дозвілля — Готель Клеопатра'
  },
  {
    path: 'biznes',
    loadComponent: () => import('./pages/biznes/biznes').then(m => m.Biznes),
    title: 'Бізнес — Готель Клеопатра'
  },
  {
    path: 'turizm',
    loadComponent: () => import('./pages/turizm/turizm').then(m => m.Turizm),
    title: 'Туризм — Готель Клеопатра'
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu').then(m => m.Menu),
    title: 'Меню — Ресторан «За Тином»'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery),
    title: 'Галерея — Готель Клеопатра'
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts').then(m => m.Contacts),
    title: 'Контакти — Готель Клеопатра'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
