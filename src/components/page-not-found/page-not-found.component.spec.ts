import { TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    })
      .compileComponents();

    this.fixture = TestBed.createComponent(PageNotFoundComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
