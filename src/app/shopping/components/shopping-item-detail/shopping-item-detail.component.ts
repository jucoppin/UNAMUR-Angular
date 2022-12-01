import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-item-detail',
  templateUrl: './shopping-item-detail.component.html',
  styleUrls: ['./shopping-item-detail.component.scss']
})
export class ShoppingItemDetailComponent implements OnInit {
  item!: Item;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    if (!id || isNaN(id)) {
      window.history.back();
      // this.router.navigate(['/']).then();
      return;
    }
    //
    // if (id === -1) {
    //   this.item = new Item();
    //
    //   this._buildForm();
    // }
    // else {
    //   this.service.get(id).subscribe(s => {
    //     this.item = s;
    //
    //     this._buildForm();
    //   });
    // }
  }

  // private _buildForm(): void {
  //   this.form = this.fb.group({});
  //
  //   if (!this.item.id) {
  //     this.form.patchValue({
  //       label: 'Default value'
  //     });
  //   }
  //   else {
  //     this.form.patchValue(this.item);
  //   }
  // }
}

class Item {
  id!: number;
  label!: string;
}
