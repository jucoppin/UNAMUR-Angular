import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping/pages/shopping-list/shopping-list.component';
import { ShoppingCreateItemComponent } from './shopping/pages/shopping-create-item/shopping-create-item.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
  },
  {
    path: 'create',
    component: ShoppingCreateItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
