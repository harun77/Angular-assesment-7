import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishService: DishService, 
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}