import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectComponent} from './project.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {OrderDatePipe} from '../../../../shared/pipes/order-date.pipe';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectComponent,
        OrderDatePipe
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(component).toBeTruthy();
    done();
  });
});
