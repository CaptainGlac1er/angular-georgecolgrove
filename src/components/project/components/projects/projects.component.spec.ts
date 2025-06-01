import { TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../../../../service/projects.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";

describe('ProjectsComponent', () => {
  type ProjectsComponentTest = TestComponentContext<ProjectsComponent>;
  beforeEach(async function (this: ProjectsComponentTest) {
    await TestBed.configureTestingModule({
    providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([])
    ]
})
      .compileComponents();
    this.fixture = TestBed.createComponent(ProjectsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: ProjectsComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
