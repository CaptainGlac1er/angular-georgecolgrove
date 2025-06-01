import { TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { ExperienceService } from '../../../../service/experience.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";

describe('ExperiencesComponent', () => {
  interface ExperiencesComponentTest extends TestComponentContext<ExperiencesComponent> {
    experienceService: ExperienceService;
  }
  beforeEach(async function (this: ExperiencesComponentTest) {
    await TestBed.configureTestingModule({
    providers: [
        ExperienceService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([])
    ]
}).compileComponents();
    this.fixture = TestBed.createComponent(ExperiencesComponent);
    this.component = this.fixture.componentInstance;
    this.experienceService = TestBed.inject(ExperienceService);
  });

  it('should create', async function (this: ExperiencesComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
