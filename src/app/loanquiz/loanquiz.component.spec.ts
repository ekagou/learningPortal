import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanquizComponent } from './loanquiz.component';

describe('LoanquizComponent', () => {
  let component: LoanquizComponent;
  let fixture: ComponentFixture<LoanquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
