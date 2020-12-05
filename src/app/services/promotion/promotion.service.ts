import { Injectable } from '@angular/core';
import { Promotion } from 'src/app/header/promotion';
import { PROMOTIONS } from 'src/app/header/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: any): Promotion {
    // return PROMOTIONS.find( e => e.id === id);
    return PROMOTIONS.filter(e => e.id === id)[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter(e => e.featured)[0];
  }
}
