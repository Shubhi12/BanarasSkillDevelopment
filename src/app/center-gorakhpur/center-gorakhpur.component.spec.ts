import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterGorakhpurComponent } from './center-gorakhpur.component';

describe('CenterGorakhpurComponent', () => {
  let component: CenterGorakhpurComponent;
  let fixture: ComponentFixture<CenterGorakhpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterGorakhpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterGorakhpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
