import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRowComponent } from './panel-row.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderDatePipe } from '../pipes/order-date.pipe';

describe('PanelRowComponent', () => {
  let component: PanelRowComponent;
  let fixture: ComponentFixture<PanelRowComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      declarations: [
        PanelRowComponent,
        OrderDatePipe
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PanelRowComponent);
    component = fixture.componentInstance;
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
