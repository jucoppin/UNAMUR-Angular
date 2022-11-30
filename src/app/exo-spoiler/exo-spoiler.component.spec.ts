import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoSpoilerComponent } from './exo-spoiler.component';

describe('ExoSpoilerComponent', () => {
  let component: ExoSpoilerComponent;
  let fixture: ComponentFixture<ExoSpoilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoSpoilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
