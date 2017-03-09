import { Component,Input, trigger ,
         state,
         style,
         transition,
         animate,
         keyframes,
         group } from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
    animations:[
      trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ])
    ]
})
export class RecipeItemComponent{
@Input() recipe:Recipe;
@Input() recipeId:number;
}
