import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem, ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
	@Input() item!: ShoppingItem;

  constructor(
		private shoppingService: ShoppingService
	) { }

  ngOnInit(): void {
  }

	delete(id: string) : void {
		this.shoppingService.delete(id);
	}

	update(id: string, increment: boolean = true) {
		this.shoppingService.updateQuantity(id, increment);
	}

}
