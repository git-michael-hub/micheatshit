import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCssComponent } from './flow-css.component';

describe('FlowCssComponent', () => {
  let component: FlowCssComponent;
  let fixture: ComponentFixture<FlowCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
