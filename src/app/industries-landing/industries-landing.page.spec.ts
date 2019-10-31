import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesLandingPage } from './industries-landing.page';

describe('IndustriesLandingPage', () => {
  let component: IndustriesLandingPage;
  let fixture: ComponentFixture<IndustriesLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
