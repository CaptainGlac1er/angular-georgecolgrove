import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [ProjectsService]
    }).compileComponents();
    this.service = TestBed.get(ProjectsService);
    done();
  });

  it('should be created', async(done) => {
    await expect(this.service).toBeTruthy();
    done();
  });
});
