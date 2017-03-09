import { Routes ,RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

 const RECIPES_ROUTES : Routes =[
    {path:'' ,       component:RecipesComponent , children:[
        {path:'' ,       component:RecipeStartComponent },
        {path:'new' ,    component:RecipeEditComponent  },
        {path:':id/edit',component:RecipeEditComponent  },
        {path:':id' ,    component:RecipeDetailComponent}
    ]},
   
];
export const recipesrouting = RouterModule.forChild(RECIPES_ROUTES);
