import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpOrderInProgressPage } from './shkp-order-in-progress.page';

describe('ShkpOrderInProgressPage', () => {
  let component: ShkpOrderInProgressPage;
  let fixture: ComponentFixture<ShkpOrderInProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpOrderInProgressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpOrderInProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
