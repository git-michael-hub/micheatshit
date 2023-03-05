import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFunctionComponent } from './special-function.component';

describe('SpecialFunctionComponent', () => {
  let component: SpecialFunctionComponent;
  let fixture: ComponentFixture<SpecialFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
