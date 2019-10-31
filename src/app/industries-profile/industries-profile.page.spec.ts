import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesProfilePage } from './industries-profile.page';

describe('IndustriesProfilePage', () => {
  let component: IndustriesProfilePage;
  let fixture: ComponentFixture<IndustriesProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
