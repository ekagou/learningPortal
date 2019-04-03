import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbucksQuizComponent } from './ebucks-quiz.component';

describe('EbucksQuizComponent', () => {
  let component: EbucksQuizComponent;
  let fixture: ComponentFixture<EbucksQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbucksQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbucksQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
