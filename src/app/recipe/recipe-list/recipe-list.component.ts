import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [new Recipe("Test", "This is a test recipe", "https://i2.wp.com/flavouroma.com/wp-content/uploads/2018/11/restaurant-style-rajma-recipe.jpg?resize=840%2C560&ssl=1"),new Recipe("Test", "This is a test recipe", "https://i2.wp.com/flavouroma.com/wp-content/uploads/2018/11/restaurant-style-rajma-recipe.jpg?resize=840%2C560&ssl=1")];

  constructor() { }

  ngOnInit(): void {
  }

}
