import { Injectable } from '@angular/core';
import { nanoid } from "nanoid";

export type ShoppingItem = {
	id: string;
	name: string;
	quantity: number;
	isPromo: boolean;
	unitPrice: number;
}

export type ShoppingItemDTO = {
	name: string;
	isPromo: boolean;
	unitPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

	private shoppingList: ShoppingItem[] = [];

	private totalPrice: number = 0;

  constructor() { }

	getAll(){
		return this.shoppingList;
	}

	getTotalPrice(){
		this.totalPrice = this.shoppingList.reduce((acc, current) => {
			return acc + (current.quantity * current.unitPrice);
		}, 0);

		return this.totalPrice;
	}

	create(item: ShoppingItemDTO) {
		const newItem: ShoppingItem = {
			id: nanoid(),
			quantity: 1,
			name: item.name,
			isPromo: item.isPromo,
			unitPrice: item.unitPrice
		}

		this.shoppingList.push(newItem);
		this.totalPrice = this.getTotalPrice();
	}

	delete(id: string) {
		const itemIndex = this.shoppingList.findIndex((item) => item.id === id);

		if (itemIndex === -1) {
			console.log('Suppression impossible');
			return;
		}

		this.shoppingList.splice(itemIndex, 1);
		this.totalPrice = this.getTotalPrice();
	}

	updateQuantity(id: string, increment: boolean = true){
		const itemIndex = this.shoppingList.findIndex((item) => item.id === id);

		if (increment) {
			this.shoppingList[itemIndex].quantity += 1;
		}else {
			this.shoppingList[itemIndex].quantity -= 1;
			if (this.shoppingList[itemIndex].quantity === 0) {
				this.delete(id);
			}
		}

		this.totalPrice = this.getTotalPrice();
	}
}
