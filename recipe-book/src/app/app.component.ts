import { Component } from '@angular/core';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [RecipeService]
})
export class AppComponent {

}
