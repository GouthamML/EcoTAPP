import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpAddPlasticPage } from './shkp-add-plastic.page';

describe('ShkpAddPlasticPage', () => {
  let component: ShkpAddPlasticPage;
  let fixture: ComponentFixture<ShkpAddPlasticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpAddPlasticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpAddPlasticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
