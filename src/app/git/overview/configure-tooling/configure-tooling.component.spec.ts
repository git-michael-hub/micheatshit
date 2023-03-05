import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureToolingComponent } from './configure-tooling.component';

describe('ConfigureToolingComponent', () => {
  let component: ConfigureToolingComponent;
  let fixture: ComponentFixture<ConfigureToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureToolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
