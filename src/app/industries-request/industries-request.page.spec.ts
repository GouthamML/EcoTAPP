import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesRequestPage } from './industries-request.page';

describe('IndustriesRequestPage', () => {
  let component: IndustriesRequestPage;
  let fixture: ComponentFixture<IndustriesRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
