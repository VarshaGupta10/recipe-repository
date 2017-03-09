import { Injectable,EventEmitter } from '@angular/core';

import { Ingredient } from "../shared/ingredient";

import {Recipe} from './recipe';
import {Headers, Http, Response} from '@angular/http' ;
import  "rxjs/Rx";

@Injectable()
export class RecipeService {
    recipesChanged = new EventEmitter<Recipe[]>();
  private recipes : Recipe[] =[
   new Recipe('Crepes','Dummy','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6k4q778OGj8smmpDfvOaVa6fTMN476LY-GWxJixfiYph7YDpLPQ',[
    new Ingredient('FenchFries',2),
    new Ingredient('Meatloaf',1)
  ]),
  new Recipe('Crepes1','Dummy1','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTS9BVdR6SoNr4c1Ivi_BU18is5fsY4VWSVQ4AWgTVAVDOtWHa6Q',[
     new Ingredient('FenchFries1',22),
    new Ingredient('Meatloaf1',12)
  ]),
  
  ];
  constructor(private http: Http  ) { }
  
  getRecipes(){
    return this.recipes;
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
    addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-2281d.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-2281d.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
         this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
