import { TestBed } from '@angular/core/testing';

import { PanelRowComponent } from './panel-row.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderDatePipe } from '../pipes/order-date.pipe';

describe('PanelRowComponent', () => {

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

    this.fixture = TestBed.createComponent(PanelRowComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
