import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [ProjectsService]
    }).compileComponents();
    service = TestBed.get(ProjectsService);
    done();
  });

  it('should be created', async(done) => {
    await expect(service).toBeTruthy();
    done();
  });
});
