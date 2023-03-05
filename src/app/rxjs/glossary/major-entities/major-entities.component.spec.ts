import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorEntitiesComponent } from './major-entities.component';

describe('MajorEntitiesComponent', () => {
  let component: MajorEntitiesComponent;
  let fixture: ComponentFixture<MajorEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
