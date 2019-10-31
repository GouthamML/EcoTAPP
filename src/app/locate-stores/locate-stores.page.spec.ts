import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateStoresPage } from './locate-stores.page';

describe('LocateStoresPage', () => {
  let component: LocateStoresPage;
  let fixture: ComponentFixture<LocateStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateStoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
