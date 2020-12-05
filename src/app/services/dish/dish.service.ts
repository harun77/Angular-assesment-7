import { Injectable } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: any): Dish {
    // return DISHES.find( e => e.id === id);
    return DISHES.filter(e => e.id === id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter(e => e.featured)[0];
  }
}
