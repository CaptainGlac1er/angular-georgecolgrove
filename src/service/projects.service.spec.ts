import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectsService', () => {
  interface ProjectsServiceTest {
    projectService: ProjectsService;
  }
  beforeEach(async function (this: ProjectsServiceTest) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProjectsService]
    }).compileComponents();
    this.projectService = TestBed.get(ProjectsService);
  });

  it('should be created', async function (this: ProjectsServiceTest) {
    await expect(this.projectService).toBeTruthy();
  });
});
