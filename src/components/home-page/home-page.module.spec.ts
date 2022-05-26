import { HomePageModule } from './home-page.module';
import { TestBed } from '@angular/core/testing';

describe('HomePageModule', () => {
  let module: HomePageModule;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        HomePageModule
      ]
    }).compileComponents();
    module = TestBed.inject(HomePageModule);
    done();
  });

  it('should create an instance',  () => {
    expect(module).toBeTruthy();
  });
});
