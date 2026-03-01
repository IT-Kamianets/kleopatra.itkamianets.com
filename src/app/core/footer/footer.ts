import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Номери', path: '/numbers' },
    { label: 'Ресторан', path: '/restaurants' },
    { label: 'Дозвілля', path: '/leisure' },
    { label: 'Бізнес', path: '/biznes' },
    { label: 'Туризм', path: '/turizm' },
    { label: 'Галерея', path: '/gallery' },
    { label: 'Контакти', path: '/contacts' },
  ];
}
