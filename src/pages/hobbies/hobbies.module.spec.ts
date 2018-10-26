import {HobbiesModule} from './hobbies.module';
import {TestBed} from '@angular/core/testing';

describe('HobbiesModule', () => {
  let hobbiesModule: HobbiesModule;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule(
      {
        imports: [HobbiesModule]
      }
    ).compileComponents();
    hobbiesModule = TestBed.get(HobbiesModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(hobbiesModule).toBeTruthy();
    done();
  });
});
