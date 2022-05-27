import { TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderDatePipe } from '../../../../shared/pipes/order-date.pipe';
import { ProjectsService } from '../../../../service/projects.service';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';

describe('ProjectComponent', () => {
  type ProjectComponentTest = TestComponentContext<ProjectComponent>;
  beforeEach(async function (this: ProjectComponentTest) {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ProjectComponent,
        OrderDatePipe
      ],
      providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();

    this.fixture = TestBed.createComponent(ProjectComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create', async function (this: ProjectComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
