import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypesInheritanceComponent } from './prototypes-inheritance.component';

describe('PrototypesInheritanceComponent', () => {
  let component: PrototypesInheritanceComponent;
  let fixture: ComponentFixture<PrototypesInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototypesInheritanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypesInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
