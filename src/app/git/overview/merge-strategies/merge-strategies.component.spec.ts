import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeStrategiesComponent } from './merge-strategies.component';

describe('MergeStrategiesComponent', () => {
  let component: MergeStrategiesComponent;
  let fixture: ComponentFixture<MergeStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeStrategiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
