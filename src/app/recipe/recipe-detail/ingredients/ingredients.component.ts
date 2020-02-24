import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../ingredients.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients : Ingredients[] = [new Ingredients("Onion", 1), new Ingredients("tomato", 2)];
  constructor() { }

  ngOnInit(): void {
  }

}
