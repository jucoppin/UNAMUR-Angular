import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingCreateItemComponent } from './pages/shopping-create-item/shopping-create-item.component';
import { ShoppingItemDetailComponent } from './components/shopping-item-detail/shopping-item-detail.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingCreateItemComponent,
    ShoppingItemDetailComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class ShoppingModule { }
