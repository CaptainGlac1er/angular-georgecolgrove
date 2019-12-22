import { TestBed } from '@angular/core/testing';

import { MobileService } from './mobile.service';

describe('MobileService', () => {
  interface MobileServiceTest {
    mobileService: MobileService;
  }
  beforeEach(async function (this: MobileServiceTest) {
    await TestBed.configureTestingModule({
      providers: [MobileService]
    }).compileComponents();
    this.mobileService = TestBed.get(MobileService);
  });

  it('should be created', async function (this: MobileServiceTest) {
    await expect(this.mobileService).toBeTruthy();
  });
});
