import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsLadingPage } from './logistics-lading.page';

describe('LogisticsLadingPage', () => {
  let component: LogisticsLadingPage;
  let fixture: ComponentFixture<LogisticsLadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsLadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsLadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
