import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingCreateItemComponent } from './pages/shopping-create-item/shopping-create-item.component';
import { ShoppingItemDetailComponent } from './components/shopping-item-detail/shopping-item-detail.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingItemComponent } from './pages/shopping-item/shopping-item.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingCreateItemComponent,
    ShoppingItemDetailComponent,
    ShoppingItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class ShoppingModule { }
