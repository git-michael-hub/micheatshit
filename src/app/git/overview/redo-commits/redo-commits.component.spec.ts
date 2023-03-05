import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoCommitsComponent } from './redo-commits.component';

describe('RedoCommitsComponent', () => {
  let component: RedoCommitsComponent;
  let fixture: ComponentFixture<RedoCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedoCommitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedoCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
