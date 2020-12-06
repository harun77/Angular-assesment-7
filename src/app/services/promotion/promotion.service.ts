import { Injectable } from '@angular/core';
import { Promotion } from 'src/app/header/promotion';
import { PROMOTIONS } from 'src/app/header/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: any): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter(e => e.id === id)[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter(e => e.featured)[0]);
  }
}
