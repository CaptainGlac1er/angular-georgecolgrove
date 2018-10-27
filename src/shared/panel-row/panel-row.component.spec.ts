import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRowComponent } from './panel-row.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderDatePipe } from '../pipes/order-date.pipe';

describe('PanelRowComponent', () => {
  let component: PanelRowComponent;
  let fixture: ComponentFixture<PanelRowComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
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
    fixture.detectChanges();
    done();
  });

  it('should create', async (done) => {
    await expect(component).toBeTruthy();
    done();
  });
});
