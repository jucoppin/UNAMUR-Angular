import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoMenuComponent } from './exo-menu.component';

describe('ExoMenuComponent', () => {
  let component: ExoMenuComponent;
  let fixture: ComponentFixture<ExoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
