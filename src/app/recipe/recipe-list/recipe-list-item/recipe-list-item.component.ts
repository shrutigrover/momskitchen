import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output() onRecipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(){
    this.onRecipeSelected.emit();
  }
  
}
