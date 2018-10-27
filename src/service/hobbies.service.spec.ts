import { TestBed } from '@angular/core/testing';

import { HobbiesService } from './hobbies.service';

describe('HobbiesService', () => {
  let service: HobbiesService;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [HobbiesService]
    }).compileComponents();
    service = TestBed.get(HobbiesService);
    done();
  });

  it('should be created', async (done) => {
    await expect(service).toBeTruthy();
    done();
  });
});
