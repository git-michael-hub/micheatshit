import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizeChangesComponent } from './synchronize-changes.component';

describe('SynchronizeChangesComponent', () => {
  let component: SynchronizeChangesComponent;
  let fixture: ComponentFixture<SynchronizeChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynchronizeChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronizeChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
