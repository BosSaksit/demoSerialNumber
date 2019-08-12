import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodataPage } from './infodata.page';

describe('InfodataPage', () => {
  let component: InfodataPage;
  let fixture: ComponentFixture<InfodataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfodataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
