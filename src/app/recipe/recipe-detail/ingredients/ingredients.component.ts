import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../ingredients.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @ViewChild('itemName') ingName : ElementRef;
  @ViewChild('itemAmount') ingQuantity : ElementRef;

  ingredients : Ingredients[] = [new Ingredients("Onion", 1), new Ingredients("tomato", 2)];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(){
    this.ingredients.push(new Ingredients(this.ingName.nativeElement.value, this.ingQuantity.nativeElement.value));
  }
}
