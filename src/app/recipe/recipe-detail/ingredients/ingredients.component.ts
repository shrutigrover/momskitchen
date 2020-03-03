import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../ingredients.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @ViewChild('itemName') ingName : ElementRef;
  @ViewChild('itemAmount') ingQuantity : ElementRef;

  ingredients : Ingredients[] = [];
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientsService.getIngredients();
    this.ingredientsService.ingredientsChanged.subscribe((ing: Ingredients[]) => {
  
      this.ingredients = ing;
    });
  }

  onIngredientAdd(){
    this.ingredientsService.addIngredients(new Ingredients(this.ingName.nativeElement.value, this.ingQuantity.nativeElement.value));
  }
}
