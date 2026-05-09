import { TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../../../../service/projects.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {MockProvider} from "ng-mocks";
import {Title} from "@angular/platform-browser";
import {EMPTY} from "rxjs";
import {RouterTestingHarness} from "@angular/router/testing";

describe('ProjectsComponent', () => {
    let harness: RouterTestingHarness;
    let component: ProjectsComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ProjectsComponent],
            providers: [
                { provide: IS_BROWSER, useValue: true },
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                MockProvider(ProjectsService, { getProjectsData: () => EMPTY }),
                MockProvider(Title),
                provideRouter([
                    { path: 'projects', component: ProjectsComponent },
                    { path: '**', redirectTo: '' },
                ]),
            ],
        });

        harness = await RouterTestingHarness.create();
        component = await harness.navigateByUrl('/projects', ProjectsComponent);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
