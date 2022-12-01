import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCreateItemComponent } from './shopping-create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ShoppingCreateItemComponent', () => {
  let component: ShoppingCreateItemComponent;
  let fixture: ComponentFixture<ShoppingCreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCreateItemComponent ],
      imports: [FormsModule, ReactiveFormsModule]
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
