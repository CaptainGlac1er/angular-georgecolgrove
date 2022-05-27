import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { IS_BROWSER } from '../../shared/providers';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      providers: [
        { provide: IS_BROWSER, useValue: true }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    done();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
});
