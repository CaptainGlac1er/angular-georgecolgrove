import { ExperienceModule } from './experience.module';
import { TestBed } from '@angular/core/testing';

describe('ExperienceModule', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        ExperienceModule
      ]
    }).compileComponents();
    this.experienceModule = TestBed.get(ExperienceModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(this.experienceModule).toBeTruthy();
    done();
  });
});
