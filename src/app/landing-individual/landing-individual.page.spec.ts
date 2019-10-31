import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIndividualPage } from './landing-individual.page';

describe('LandingIndividualPage', () => {
  let component: LandingIndividualPage;
  let fixture: ComponentFixture<LandingIndividualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingIndividualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
