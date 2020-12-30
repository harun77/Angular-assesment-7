import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DishService } from '../services/dish/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.dishService.getIds().subscribe(ids => this.dishIds = ids);
    this.route.params
      .pipe(switchMap(params => this.dishService.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id) });
  }

  setPrevNext(id: string) {
    const idx = this.dishIds.indexOf(id);
    this.prev = this.dishIds[(idx - 1 + this.dishIds.length) % this.dishIds.length];
    this.next = this.dishIds[(idx + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
