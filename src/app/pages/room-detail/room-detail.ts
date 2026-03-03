import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TranslationService } from '../../core/translation/translation.service';
import { TranslatePipe } from '../../shared/translate.pipe';

const ROOM_IMAGES: Record<string, { heroImage: string; gallery: string[] }> = {
  standard: {
    heroImage: 'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/standart_prew.jpg',
    gallery: [
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/econom/standart_econom11.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/econom/standart_econom12.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/clasic/standart_clasik.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/clasic/standart_econom2.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/optimal/standart_optimal1.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/Standart/optimal/standart_optimal2.jpg',
    ],
  },
  lux: {
    heroImage: 'https://kleopatra-hotel.com/images/stories/stare_misto/lux/luks_prev.jpg',
    gallery: [
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/optimal/luks_optumalnui1.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/optimal/luks_optumalnui2.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/klasik/luks_klasuchn11.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/klasik/luks_klasuchn12.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/simeinui/luks_simeinui1.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/lux/simeinui/luks_simeinui2.jpg',
    ],
  },
  biznes: {
    heroImage: 'https://kleopatra-hotel.com/images/stories/stare_misto/bussines/Golovna_5_thumb_medium300_119.jpg',
    gallery: [
      'https://kleopatra-hotel.com/images/stories/stare_misto/bussines/pano_thumb_medium900_.jpg',
    ],
  },
  vip: {
    heroImage: 'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezidentskiy.jpg',
    gallery: [
      'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezudent/IMG_0702-Panorama.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezudent/IMG_0716-Panorama.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezudent/IMG_0730-Panorama.jpg',
      'https://kleopatra-hotel.com/images/stories/stare_misto/vip/prezudent/IMG_0739-Panorama.jpg',
    ],
  },
};

@Component({
  selector: 'app-room-detail',
  imports: [RouterLink, ScrollAnimateDirective, TranslatePipe],
  templateUrl: './room-detail.html',
  styleUrl: './room-detail.scss'
})
export class RoomDetail {
  private route = inject(ActivatedRoute);
  svc = inject(TranslationService);

  roomType = toSignal(this.route.params.pipe(map(p => p['type'] as string)));

  room = computed(() => {
    const type = this.roomType() ?? '';
    const roomData = this.svc.translations().roomDetail.rooms[type];
    const images = ROOM_IMAGES[type];
    if (!roomData || !images) return null;
    return { ...roomData, ...images };
  });
}
