import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { TestComponentContext } from '../../interfaces/TestComponentContext';

describe('FooterComponent', () => {
  type FooterComponentTest = TestComponentContext<FooterComponent>;
  beforeEach(async function (this: FooterComponentTest) {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(FooterComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: FooterComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
