import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { ExperienceService } from '../../../../service/experience.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";

describe('ExperienceComponent', () => {
  type ExperienceComponentTest = TestComponentContext<ExperienceComponent>;
  beforeEach(async function (this: ExperienceComponentTest) {
    await TestBed.configureTestingModule({
    providers: [
        ExperienceService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([])
    ]
})
      .compileComponents();
    this.fixture = TestBed.createComponent(ExperienceComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: ExperienceComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
