import { TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { OrderDatePipe } from '@shared/pipes/order-date.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ExperienceService } from '@service/experience.service';

describe('ExperiencesComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExperiencesComponent,
        OrderDatePipe,
      ],
      providers: [
        ExperienceService,
        {provide: PLATFORM_ID, useValue: 'browser'},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(ExperiencesComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
