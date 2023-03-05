import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorEntitiesComponent } from './minor-entities.component';

describe('MinorEntitiesComponent', () => {
  let component: MinorEntitiesComponent;
  let fixture: ComponentFixture<MinorEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
