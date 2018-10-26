import {ExperienceModule} from './experience.module';
import {TestBed} from '@angular/core/testing';

describe('ExperienceModule', () => {
  let experienceModule: ExperienceModule;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        ExperienceModule
      ]
    }).compileComponents();
    experienceModule = TestBed.get(ExperienceModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(experienceModule).toBeTruthy();
    done();
  });
});
