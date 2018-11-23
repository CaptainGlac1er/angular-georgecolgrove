import { TestBed } from '@angular/core/testing';

import { MobileService } from './mobile.service';

describe('MobileService', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      providers: [MobileService]
    }).compileComponents();
    this.service = TestBed.get(MobileService);
    done();
  });

  it('should be created', async (done) => {
    await expect(this.service).toBeTruthy();
    done();
  });
});
