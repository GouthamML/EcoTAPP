import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupsPage } from './pickups.page';

describe('PickupsPage', () => {
  let component: PickupsPage;
  let fixture: ComponentFixture<PickupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
