import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInfoComponent } from './nav-info.component';

describe('NavInfoComponent', () => {
  let component: NavInfoComponent;
  let fixture: ComponentFixture<NavInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
