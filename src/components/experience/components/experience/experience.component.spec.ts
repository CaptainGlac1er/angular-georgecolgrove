import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExperienceService } from '../../../../service/experience.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';

describe('ExperienceComponent', () => {
  type ExperienceComponentTest = TestComponentContext<ExperienceComponent>;
  beforeEach(async function (this: ExperienceComponentTest) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ExperienceComponent
      ],
      providers: [
        ExperienceService,
        { provide: IS_BROWSER, useValue: true },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(ExperienceComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: ExperienceComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
