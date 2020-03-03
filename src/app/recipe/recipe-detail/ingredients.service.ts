import { Ingredients } from '../ingredients.model';
import { EventEmitter } from '@angular/core';

export class IngredientsService{
    //event emitter to tell when new ing added
    ingredientsChanged = new EventEmitter<Ingredients[]>();

    private ingredients : Ingredients[] = [new Ingredients("Onion", 1), new Ingredients("tomato", 2)];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}