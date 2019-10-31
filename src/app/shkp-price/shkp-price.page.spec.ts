import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpPricePage } from './shkp-price.page';

describe('ShkpPricePage', () => {
  let component: ShkpPricePage;
  let fixture: ComponentFixture<ShkpPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpPricePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
