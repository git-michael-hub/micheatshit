import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFunctionsComponent } from './advanced-functions.component';

describe('AdvancedFunctionsComponent', () => {
  let component: AdvancedFunctionsComponent;
  let fixture: ComponentFixture<AdvancedFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
