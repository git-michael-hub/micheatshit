import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinIncludeComponent } from './mixin-include.component';

describe('MixinIncludeComponent', () => {
  let component: MixinIncludeComponent;
  let fixture: ComponentFixture<MixinIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixinIncludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixinIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
