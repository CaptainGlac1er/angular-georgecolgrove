import { HobbiesModule } from './hobbies.module';
import { TestBed } from '@angular/core/testing';

describe('HobbiesModule', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule(
      {
        imports: [HobbiesModule]
      }
    ).compileComponents();
    this.hobbiesModule = TestBed.get(HobbiesModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(this.hobbiesModule).toBeTruthy();
    done();
  });
});
