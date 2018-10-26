import {TestBed} from '@angular/core/testing';

import {MobileService} from './mobile.service';

describe('MobileService', () => {
  let service: MobileService;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [MobileService]
    }).compileComponents();
    service = TestBed.get(MobileService);
    done();
  });

  it('should be created', async (done) => {
    await expect(service).toBeTruthy();
    done();
  });
});
