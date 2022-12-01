import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping/pages/shopping-list/shopping-list.component';
import { ShoppingCreateItemComponent } from './shopping/pages/shopping-create-item/shopping-create-item.component';
import { ShoppingItemDetailComponent } from './shopping/components/shopping-item-detail/shopping-item-detail.component';
import { ProjectListComponent } from './project/pages/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
  },
  {
    path: 'create',
    component: ShoppingCreateItemComponent,
  },
  {
    path: 'details/:id',
    component: ShoppingItemDetailComponent,
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      {
        path: 'sub',
        children: [

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
