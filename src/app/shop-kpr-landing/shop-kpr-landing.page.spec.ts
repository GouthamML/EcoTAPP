import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKprLandingPage } from './shop-kpr-landing.page';

describe('ShopKprLandingPage', () => {
  let component: ShopKprLandingPage;
  let fixture: ComponentFixture<ShopKprLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopKprLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKprLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
