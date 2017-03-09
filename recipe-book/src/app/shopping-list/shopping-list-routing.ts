import { Routes ,RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';


 const SHOPPING_LIST_ROUTES : Routes =[
    {path:'' , component:   ShoppingListComponent }
];
export const shoppinglistrouting = RouterModule.forChild(SHOPPING_LIST_ROUTES);
