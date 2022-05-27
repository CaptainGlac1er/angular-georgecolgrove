import { ExperienceModule } from './experience.module';
import { TestBed } from '@angular/core/testing';

describe('ExperienceModule', () => {
  let module: ExperienceModule;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ExperienceModule
      ]
    }).compileComponents();
    module = TestBed.inject(ExperienceModule);
  });

  it('should create an instance',  () => {
    expect(module).toBeTruthy();
  });
});
