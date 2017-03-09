import { Component,OnChanges,Output,  OnInit, Input,EventEmitter, trigger ,
         state,
         style,
         transition,
         animate,
         keyframes,
         group } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
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
export class ShoppingListAddComponent implements OnChanges {
 isAdd = true;
   @Input() item: Ingredient;
    @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }
  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient );
      this.onClear();
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

onDelete(){
  this.sls.deleteItem(this.item);
  this.onClear();
}
onClear(){
  this.isAdd = true;
  this.cleared.emit(null);
}

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

}
