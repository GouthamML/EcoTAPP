import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkpLogisticsPage } from './shkp-logistics.page';

describe('ShkpLogisticsPage', () => {
  let component: ShkpLogisticsPage;
  let fixture: ComponentFixture<ShkpLogisticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkpLogisticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkpLogisticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
