import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { ExperienceService } from '../../../../service/experience.service';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExperienceComponent
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
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(component).toBeTruthy();
    done();
  });
});
