import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeConflictsComponent } from './merge-conflicts.component';

describe('MergeConflictsComponent', () => {
  let component: MergeConflictsComponent;
  let fixture: ComponentFixture<MergeConflictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeConflictsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeConflictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
