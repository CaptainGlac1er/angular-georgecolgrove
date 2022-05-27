import { HobbiesModule } from './hobbies.module';
import { TestBed } from '@angular/core/testing';

describe('HobbiesModule', () => {
  let module: HobbiesModule;
  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [HobbiesModule]
      }
    ).compileComponents();
    module = TestBed.inject(HobbiesModule);
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
