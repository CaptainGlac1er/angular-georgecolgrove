import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(FooterComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
