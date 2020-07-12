import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillingTrainingComponent } from './skilling-training.component';

describe('SkillingTrainingComponent', () => {
  let component: SkillingTrainingComponent;
  let fixture: ComponentFixture<SkillingTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillingTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
