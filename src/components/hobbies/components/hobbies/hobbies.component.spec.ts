import { TestBed } from '@angular/core/testing';

import { HobbiesComponent } from './hobbies.component';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';

describe('HobbiesComponent', () => {
  type HobbiesComponentTest = TestComponentContext<HobbiesComponent>;
  beforeEach(async function (this: HobbiesComponentTest) {
    await TestBed.configureTestingModule({
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(HobbiesComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: HobbiesComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
