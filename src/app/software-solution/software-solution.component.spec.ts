import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionComponent } from './software-solution.component';

describe('SoftwareSolutionComponent', () => {
  let component: SoftwareSolutionComponent;
  let fixture: ComponentFixture<SoftwareSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
