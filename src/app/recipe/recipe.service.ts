import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

    public recipeSelected  = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [new Recipe("Test1", "This is a test recipe", "https://i2.wp.com/flavouroma.com/wp-content/uploads/2018/11/restaurant-style-rajma-recipe.jpg?resize=840%2C560&ssl=1"),
    new Recipe("Test2", "This is a test recipe", "https://i2.wp.com/flavouroma.com/wp-content/uploads/2018/11/restaurant-style-rajma-recipe.jpg?resize=840%2C560&ssl=1")];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id : number){
        return this.recipes.slice()[id];
    }

}