import { ProjectModule } from './project.module';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModule', () => {
  let projectModule: ProjectModule;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        ProjectModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    projectModule = TestBed.get(ProjectModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(projectModule).toBeTruthy();
    done();
  });
});
