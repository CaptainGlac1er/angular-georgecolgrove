import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import Spy = jasmine.Spy;
import { ProjectsService } from 'service/projects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExperienceService', () => {
  interface ExperienceServiceTests {
    projectService: ProjectsService;
    experienceService: ExperienceService;
  }

  beforeEach(async function (this: ExperienceServiceTests)  {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ],
      providers: [
        ExperienceService
      ]
    }).compileComponents();
    this.experienceService = TestBed.get(ExperienceService);
    this.projectService = TestBed.get(ProjectsService);
  });

  it('should be created', async function (this: ExperienceServiceTests) {
    await expect(this.experienceService).toBeTruthy();
  });

  describe('getProjectsForJob', () => {
    interface GetProjectsForJobTests extends ExperienceServiceTests {
      spy: Spy;
    }

    beforeEach(async function (this: GetProjectsForJobTests) {
      this.spy = spyOn(this.projectService, 'getProjectsForJob');
    });

    it('should return empty array with an undefined job',
      async function (this: GetProjectsForJobTests) {
      this.spy.withArgs(undefined).and.returnValue(Promise.resolve([]));
      expect(await this.experienceService.getProjectsForJob(undefined)).toEqual([]);
    })

  })
});
