import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtRootComponent } from './at-root.component';

describe('AtRootComponent', () => {
  let component: AtRootComponent;
  let fixture: ComponentFixture<AtRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
