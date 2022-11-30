import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item.model';

@Component({
  selector: 'app-main-shopping-item',
  templateUrl: './main-shopping-item.component.html',
  styleUrls: ['./main-shopping-item.component.scss']
})
export class MainShoppingItemComponent implements OnInit, OnChanges {
  @Input() shoppingItem!: ShoppingItem;
  @Input() userID!: number;

  @Output() onDeleteCompleted: EventEmitter<{ id: number }> = new EventEmitter<{ id: number }>();

  constructor() {
    console.log('CTOR', this.shoppingItem);

    // this.onDeleteCompleted = new EventEmitter<{ id: number }>();
  }

  ngOnInit(): void {
    if (!this.shoppingItem) {
      throw new Error('Le [shoppingItem] est manquant !');
    }

    console.log('ngOnInit', this.shoppingItem);
    console.log('ngOnInit', this.shoppingItem.label);


    // this.onDeleteCompleted.emit({id: this.shoppingItem.id});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteItem(evt: MouseEvent): void {
    console.log('CLICK CHILD', evt);

    evt.preventDefault();
    evt.stopPropagation();

    if (confirm('Confirmer la suppression ? ')) {
      this.onDeleteCompleted.emit({id: this.shoppingItem.id});
    }
  }

  addToCart(evt: MouseEvent): void {
    console.log('CLICK ADD TO CART', evt);
  }
}
