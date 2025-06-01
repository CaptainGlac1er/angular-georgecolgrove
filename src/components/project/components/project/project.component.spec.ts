import { TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { ProjectsService } from '../../../../service/projects.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";

describe('ProjectComponent', () => {
  type ProjectComponentTest = TestComponentContext<ProjectComponent>;
  beforeEach(async function (this: ProjectComponentTest) {
    await TestBed.configureTestingModule({
    providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([])
    ]
}).compileComponents();

    this.fixture = TestBed.createComponent(ProjectComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: ProjectComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
