import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: any): Observable<Dish> {
    return of(DISHES.filter(e => e.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(e => e.featured)[0]).pipe(delay(2000));
  }

  getIds(): Observable<string[]> {
    return of(DISHES.map(dish => dish.id));
  }
}
