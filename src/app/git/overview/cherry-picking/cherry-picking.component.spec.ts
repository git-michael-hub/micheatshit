import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryPickingComponent } from './cherry-picking.component';

describe('CherryPickingComponent', () => {
  let component: CherryPickingComponent;
  let fixture: ComponentFixture<CherryPickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherryPickingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
