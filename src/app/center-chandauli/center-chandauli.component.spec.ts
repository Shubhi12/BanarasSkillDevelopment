import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterChandauliComponent } from './center-chandauli.component';

describe('CenterChandauliComponent', () => {
  let component: CenterChandauliComponent;
  let fixture: ComponentFixture<CenterChandauliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterChandauliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterChandauliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
