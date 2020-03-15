import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipe/select-recipe/select-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

const appRoutes : Routes = [
    {path : '' , redirectTo:'/about', pathMatch:'full'},
    {path : 'about' , component : AboutComponent},
    {path : 'recipes' , component : RecipeComponent, children:[
        {path : '', component: SelectRecipeComponent},
        {path : 'new', component: EditRecipeComponent},
        {path : ':id', component: RecipeDetailComponent},
        {path : ':id/edit' , component : EditRecipeComponent}
    ]},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}