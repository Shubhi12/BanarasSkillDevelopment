import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterVaranasiComponent } from './center-varanasi.component';

describe('CenterVaranasiComponent', () => {
  let component: CenterVaranasiComponent;
  let fixture: ComponentFixture<CenterVaranasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterVaranasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterVaranasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
