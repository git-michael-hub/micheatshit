import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesAsyncAwaitComponent } from './promises-async-await.component';

describe('PromisesAsyncAwaitComponent', () => {
  let component: PromisesAsyncAwaitComponent;
  let fixture: ComponentFixture<PromisesAsyncAwaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesAsyncAwaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesAsyncAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
