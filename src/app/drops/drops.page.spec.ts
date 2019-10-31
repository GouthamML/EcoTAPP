import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropsPage } from './drops.page';

describe('DropsPage', () => {
  let component: DropsPage;
  let fixture: ComponentFixture<DropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
