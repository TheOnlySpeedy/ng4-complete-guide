import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    editedItemIndex: number;
    private shoppingListSubscription: Subscription;
    private shoppingListEditSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListSubscription = this.shoppingListService.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
        );
        this.shoppingListEditSubscription = this.shoppingListService.startedEditing.subscribe(
          (index: number) => {
              this.editedItemIndex = index;
          }
        );
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.shoppingListSubscription.unsubscribe();
    }
}
