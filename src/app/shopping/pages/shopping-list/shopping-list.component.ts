import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  constructor(
    private readonly router: Router,
  ) {
  }

  goToCreate(): void {
    this.router.navigate(['/create']);
  }
}
