import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoShoppingListComponent } from './exo-shopping-list.component';

describe('ExoShoppingListComponent', () => {
  let component: ExoShoppingListComponent;
  let fixture: ComponentFixture<ExoShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoShoppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
