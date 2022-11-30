import { Component, OnInit } from '@angular/core';
import { ShoppingItem, ShoppingItemDTO, ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrls: ['./exo-shopping-list.component.scss']
})
export class ExoShoppingListComponent implements OnInit {
	public shoppingList: ShoppingItem[] = [];

	public dataInput: ShoppingItemDTO = {
		isPromo: false,
		name: '',
		unitPrice: 0
	}

  constructor(
		private shoppingService: ShoppingService
	) { }

  ngOnInit(): void {
		this.shoppingList = this.shoppingService.getAll();
  }

	add(): void {
		this.shoppingService.create(this.dataInput);
	}

	totalPrice() {
		return this.shoppingService.getTotalPrice();
	}
}
