import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsInfoComponent } from './payments-info.component';

describe('PaymentsInfoComponent', () => {
  let component: PaymentsInfoComponent;
  let fixture: ComponentFixture<PaymentsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
