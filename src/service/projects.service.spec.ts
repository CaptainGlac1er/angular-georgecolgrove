import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {IS_BROWSER} from '../shared/providers';

describe('ProjectsService', () => {
  let service: ProjectsService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProjectsService,
        { provide: IS_BROWSER, useValue: true }
      ]
    }).compileComponents();
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
