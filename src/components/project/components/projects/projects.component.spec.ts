import { TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderDatePipe } from '../../../../shared/pipes/order-date.pipe';
import { ProjectsService } from '../../../../service/projects.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';

describe('ProjectsComponent', () => {
  type ProjectsComponentTest = TestComponentContext<ProjectsComponent>;
  beforeEach(async function (this: ProjectsComponentTest) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ProjectsComponent,
        OrderDatePipe
      ],
      providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
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
