import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbucksInfoComponent } from './ebucks-info.component';

describe('EbucksInfoComponent', () => {
  let component: EbucksInfoComponent;
  let fixture: ComponentFixture<EbucksInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbucksInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbucksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
