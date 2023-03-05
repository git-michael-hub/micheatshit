import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitMistakesComponent } from './commit-mistakes.component';

describe('CommitMistakesComponent', () => {
  let component: CommitMistakesComponent;
  let fixture: ComponentFixture<CommitMistakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitMistakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
