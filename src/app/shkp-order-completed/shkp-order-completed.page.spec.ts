import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpOrderCompletedPage } from './shkp-order-completed.page';

describe('ShkpOrderCompletedPage', () => {
  let component: ShkpOrderCompletedPage;
  let fixture: ComponentFixture<ShkpOrderCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpOrderCompletedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpOrderCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
