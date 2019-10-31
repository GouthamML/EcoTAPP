import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpProfilePage } from './shkp-profile.page';

describe('ShkpProfilePage', () => {
  let component: ShkpProfilePage;
  let fixture: ComponentFixture<ShkpProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
