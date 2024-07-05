import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import Spy = jasmine.Spy;
import { ProjectsService } from './projects.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../shared/providers';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ExperienceService', () => {
  let projectService: ProjectsService;
  let service: ExperienceService;
  beforeEach(async () =>  {
    await TestBed.configureTestingModule({
    imports: [],
    providers: [
        ExperienceService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();
    service = TestBed.inject(ExperienceService);
    projectService = TestBed.inject(ProjectsService);
  });

  it('should be created', () =>  {
    expect(service).toBeTruthy();
  });

  describe('getProjectsForJob', () => {
    let spy: Spy;
    beforeEach(() => {
      spy = spyOn(projectService, 'getProjectsForJob');
    });

    it('should return empty array with an undefined job', (done) => {
      spy.withArgs(undefined).and.returnValue(of([]));
      service.getProjectsForJob(undefined).subscribe(projects => {
        expect(projects).toEqual([]);
        done();
      });
    })

  })
});
