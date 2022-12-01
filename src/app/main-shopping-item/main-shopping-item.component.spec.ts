import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShoppingItemComponent } from './main-shopping-item.component';
import { ShoppingItem } from '../models/shopping-item.model';

describe('MainShoppingItemComponent', () => {
  let component: MainShoppingItemComponent;
  let fixture: ComponentFixture<MainShoppingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainShoppingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShoppingItemComponent);
    component = fixture.componentInstance;

    component.shoppingItem = {
      id: 42,
      label: 'Test'
    } as ShoppingItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoppingItem should have id 42', () => {
    expect(component.shoppingItem.id).toEqual(42);
  });
});
