import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountQuizComponent } from './account-quiz.component';

describe('AccountQuizComponent', () => {
  let component: AccountQuizComponent;
  let fixture: ComponentFixture<AccountQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
