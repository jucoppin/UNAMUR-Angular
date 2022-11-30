import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShoppingListComponent } from './main-shopping-list.component';

describe('MainShoppingListComponent', () => {
  let component: MainShoppingListComponent;
  let fixture: ComponentFixture<MainShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainShoppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
