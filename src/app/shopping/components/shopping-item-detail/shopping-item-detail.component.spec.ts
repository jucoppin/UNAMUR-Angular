import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemDetailComponent } from './shopping-item-detail.component';

describe('ShoppingItemDetailComponent', () => {
  let component: ShoppingItemDetailComponent;
  let fixture: ComponentFixture<ShoppingItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
