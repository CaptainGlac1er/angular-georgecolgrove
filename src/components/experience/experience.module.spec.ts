import { ExperienceModule } from './experience.module';
import { TestBed } from '@angular/core/testing';

describe('ExperienceModule', () => {
  let module: ExperienceModule;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        ExperienceModule
      ]
    }).compileComponents();
    module = TestBed.inject(ExperienceModule);
    done();
  });

  it('should create an instance',  () => {
    expect(module).toBeTruthy();
  });
});
