import { TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { ExperienceService } from '@service/experience.service';
import { Title } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import {OrderDatePipe} from '@shared/pipes/order-date.pipe';

describe('HomePageComponent', () => {
  type HomePageComponentTest = TestComponentContext<HomePageComponent>;
  beforeEach(async function (this: HomePageComponentTest) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        HomePageComponent,
        OrderDatePipe,
      ],
      providers: [
        ExperienceService,
        Title,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(HomePageComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: HomePageComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
