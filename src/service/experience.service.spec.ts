import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [ExperienceService]
    }).compileComponents();
    this.service = TestBed.get(ExperienceService);
    done();
  });

  it('should be created', async (done) => {
    await expect(this.service).toBeTruthy();
    done();
  });
});
