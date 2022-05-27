import { TestBed } from '@angular/core/testing';

import { HobbiesService } from './hobbies.service';

describe('HobbiesService', () => {
  interface HobbiesServiceTests {
    hobbiesService: HobbiesService;
  }
  beforeEach(async function (this: HobbiesServiceTests) {
    await TestBed.configureTestingModule({
      providers: [HobbiesService]
    }).compileComponents();
    this.hobbiesService = TestBed.inject(HobbiesService);
  });

  it('should be created', async function (this: HobbiesServiceTests) {
    expect(this.hobbiesService).toBeTruthy();
  });
});
