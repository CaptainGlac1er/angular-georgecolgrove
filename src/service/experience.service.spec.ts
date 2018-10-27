import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [ExperienceService]
    }).compileComponents();
    service = TestBed.get(ExperienceService);
    done();
  });

  it('should be created', async (done) => {
    await expect(service).toBeTruthy();
    done();
  });
});
