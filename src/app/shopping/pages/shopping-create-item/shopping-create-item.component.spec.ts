import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCreateItemComponent } from './shopping-create-item.component';

describe('ShoppingCreateItemComponent', () => {
  let component: ShoppingCreateItemComponent;
  let fixture: ComponentFixture<ShoppingCreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCreateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
