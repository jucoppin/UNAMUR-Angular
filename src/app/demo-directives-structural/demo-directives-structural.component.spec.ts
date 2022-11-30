import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectivesStructuralComponent } from './demo-directives-structural.component';

describe('DemoDirectivesStructuralComponent', () => {
  let component: DemoDirectivesStructuralComponent;
  let fixture: ComponentFixture<DemoDirectivesStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDirectivesStructuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDirectivesStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
