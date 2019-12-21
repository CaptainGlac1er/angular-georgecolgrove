import { TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { OrderDatePipe } from '@shared/pipes/order-date.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ExperienceService } from '@service/experience.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';

describe('ExperiencesComponent', () => {
  interface ExperiencesComponentTest {
    experienceService: ExperienceService;
  }
  beforeEach(async function (this: TestComponentContext<ExperiencesComponent, ExperiencesComponentTest>) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ExperiencesComponent,
        OrderDatePipe,
      ],
      providers: [
        ExperienceService,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    this.fixture = TestBed.createComponent(ExperiencesComponent);
    this.component = this.fixture.componentInstance;
    this.sharedVariables.experienceService = TestBed.get(ExperienceService);
  });

  it('should create', async function (this: TestComponentContext<ExperiencesComponent, ExperiencesComponentTest>) {
    expect(this.component).toBeTruthy();
  });
});
