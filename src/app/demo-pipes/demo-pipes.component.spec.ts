import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipesComponent } from './demo-pipes.component';
import { ToTemperaturePipe } from '../pipes/to-temperature.pipe';

describe('DemoPipesComponent', () => {
  let component: DemoPipesComponent;
  let fixture: ComponentFixture<DemoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoPipesComponent, ToTemperaturePipe],
      providers: [ToTemperaturePipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DemoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
