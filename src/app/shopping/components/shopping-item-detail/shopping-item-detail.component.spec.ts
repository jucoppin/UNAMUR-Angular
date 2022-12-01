import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemDetailComponent } from './shopping-item-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('ShoppingItemDetailComponent', () => {
  let component: ShoppingItemDetailComponent;
  let fixture: ComponentFixture<ShoppingItemDetailComponent>;

  // const fakeActivatedRoute = {
  //   snapshot: { paramMap: { id: 42 } }
  // } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingItemDetailComponent],
      providers: [ActivatedRoute],
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
