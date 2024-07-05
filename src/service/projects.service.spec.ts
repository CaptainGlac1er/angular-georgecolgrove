import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {IS_BROWSER} from '../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProjectsService', () => {
  let service: ProjectsService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [],
    providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
