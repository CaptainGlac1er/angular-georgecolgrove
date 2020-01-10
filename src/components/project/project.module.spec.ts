import { ProjectModule } from './project.module';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModule', () => {
  interface ProjectModuleTest {
    projectModule: ProjectModule;
  }
  beforeEach(async function (this: ProjectModuleTest) {
    await TestBed.configureTestingModule({
      imports: [
        ProjectModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    this.projectModule = TestBed.get(ProjectModule);
  });

  it('should create an instance', async function (this: ProjectModuleTest) {
    expect(this.projectModule).toBeTruthy();
  });
});
