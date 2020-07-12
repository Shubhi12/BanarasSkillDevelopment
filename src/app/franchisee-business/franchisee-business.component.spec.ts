import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseeBusinessComponent } from './franchisee-business.component';

describe('FranchiseeBusinessComponent', () => {
  let component: FranchiseeBusinessComponent;
  let fixture: ComponentFixture<FranchiseeBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseeBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseeBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
