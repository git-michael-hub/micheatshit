import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotBranchComponent } from './forgot-branch.component';

describe('ForgotBranchComponent', () => {
  let component: ForgotBranchComponent;
  let fixture: ComponentFixture<ForgotBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
