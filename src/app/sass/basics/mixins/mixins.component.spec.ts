import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinsComponent } from './mixins.component';

describe('MixinsComponent', () => {
  let component: MixinsComponent;
  let fixture: ComponentFixture<MixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
