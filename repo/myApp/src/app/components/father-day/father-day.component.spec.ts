import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherDayComponent } from './father-day.component';

describe('FatherDayComponent', () => {
  let component: FatherDayComponent;
  let fixture: ComponentFixture<FatherDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
