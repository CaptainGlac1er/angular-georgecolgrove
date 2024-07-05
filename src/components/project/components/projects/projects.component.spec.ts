import { TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderDatePipe } from '../../../../shared/pipes/order-date.pipe';
import { ProjectsService } from '../../../../service/projects.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProjectsComponent', () => {
  type ProjectsComponentTest = TestComponentContext<ProjectsComponent>;
  beforeEach(async function (this: ProjectsComponentTest) {
    await TestBed.configureTestingModule({
    declarations: [
        ProjectsComponent,
        OrderDatePipe
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [RouterTestingModule],
    providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
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
