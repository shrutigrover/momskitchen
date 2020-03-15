import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { IngredientsComponent } from './recipe/recipe-detail/ingredients/ingredients.component';
import { StepsComponent } from './recipe/recipe-detail/steps/steps.component';
import { RecipeListItemComponent } from './recipe/recipe-list/recipe-list-item/recipe-list-item.component';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectRecipeComponent } from './recipe/select-recipe/select-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HeaderComponent,
    AboutComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    IngredientsComponent,
    StepsComponent,
    RecipeListItemComponent,
    DropdownDirective,
    SelectRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
