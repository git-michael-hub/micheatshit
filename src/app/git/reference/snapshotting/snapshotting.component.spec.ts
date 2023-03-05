import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshottingComponent } from './snapshotting.component';

describe('SnapshottingComponent', () => {
  let component: SnapshottingComponent;
  let fixture: ComponentFixture<SnapshottingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshottingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
