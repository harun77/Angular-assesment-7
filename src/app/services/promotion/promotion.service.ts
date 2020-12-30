import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Promotion } from 'src/app/header/promotion';
import { PROMOTIONS } from 'src/app/header/promotions';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: any): Observable<Promotion> {
    return of(PROMOTIONS.filter(e => e.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter(e => e.featured)[0]).pipe(delay(2000));
  }
}
