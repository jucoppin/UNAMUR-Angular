import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item.model';

@Component({
  selector: 'app-main-shopping-list',
  templateUrl: './main-shopping-list.component.html',
  styleUrls: ['./main-shopping-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainShoppingListComponent implements OnInit {
  items!: ShoppingItem[];

  userID!: number;

  constructor(
    private readonly cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.userID = 1;

    setTimeout(() => {
      this.items = [
        {
          id: 1, label: 'Produit 1'
        },
        {
          id: 2, label: 'Produit 2'
        },
      ];

      this.cd.detectChanges();
    }, 1000);

    setTimeout(() => {
      this.userID = 42;

      this.cd.detectChanges();
    }, 3000);

    setTimeout(() => {
      // this.items[0].label = 'Label modifié 1';
      this.items.push({
        id: 3,
        label: 'Nouveau produit 3'
      });

      // this.cd.detectChanges();
    }, 5000);
  }

  deleteShoppingItem(evt: { id: number }): void {
    console.log('DELETE', evt);

    if (!evt) {
      return;
    }

    const index = this.items.findIndex(x => x.id === evt.id);

    if (index === -1) {
      return;
    }

    this.items.splice(index, 1);
  }

  detectChanges(): void {
    this.cd.detectChanges();
  }
}
