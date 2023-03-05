import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSelectorsComponent } from './placeholder-selectors.component';

describe('PlaceholderSelectorsComponent', () => {
  let component: PlaceholderSelectorsComponent;
  let fixture: ComponentFixture<PlaceholderSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
