import { TestBed } from '@angular/core/testing';

import { HobbiesService } from './hobbies.service';

describe('HobbiesService', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [HobbiesService]
    }).compileComponents();
    this.service = TestBed.get(HobbiesService);
    done();
  });

  it('should be created', async (done) => {
    await expect(this.service).toBeTruthy();
    done();
  });
});
