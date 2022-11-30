import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShoppingItemComponent } from './main-shopping-item.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
