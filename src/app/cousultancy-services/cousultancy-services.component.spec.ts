import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CousultancyServicesComponent } from './cousultancy-services.component';

describe('CousultancyServicesComponent', () => {
  let component: CousultancyServicesComponent;
  let fixture: ComponentFixture<CousultancyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousultancyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousultancyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
