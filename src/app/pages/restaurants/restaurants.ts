import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';

@Component({
  selector: 'app-restaurants',
  imports: [RouterLink, ParallaxDirective, ScrollAnimateDirective],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.scss'
})
export class Restaurants {
  halls = [
    { name: '«Перлинова»', type: 'Великий зал', desc: 'Банкети, весілля, концерти до 100 осіб. Атмосфера класики.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/perluna_thumb300_119.jpg' },
    { name: '«Кришталева»', type: 'Великий зал', desc: 'Урочисті прийоми, шведська лінія. Атмосфера класики.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/vesina_thumb300_119.jpg' },
    { name: '«Зимовий сад»', type: 'Мала зала', desc: 'Атмосфера затишку посеред міста XVII ст. Особливо вечорами.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/zumsad/1_thumb300_119.jpg' },
    { name: '«Мисливська»', type: 'Мала зала', desc: 'Атмосфера середньовічного банкету. Дегустації, корпоративи.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/musluvska_thumb300_119.jpg' },
    { name: '«Кам\'яниця»', type: 'Мала зала', desc: 'Середньовічна атмосфера. Пивні вечірки, тематичні заходи.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/kamyana_thumb300_119.jpg' },
    { name: '«Дерев\'яна»', type: 'Мала зала', desc: 'Атмосфера ірландського пабу. Чаювання, кавові посиденьки.', img: 'https://kleopatra-hotel.com/images/stories/restoranu_stare_misto/derevo/1_thumb300_119.jpg' },
  ];

}
