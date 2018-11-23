import { HomePageModule } from './home-page.module';
import { TestBed } from '@angular/core/testing';

describe('HomePageModule', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        HomePageModule
      ]
    }).compileComponents();
    this.homePageModule = TestBed.get(HomePageModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(this.homePageModule).toBeTruthy();
    done();
  });
});
