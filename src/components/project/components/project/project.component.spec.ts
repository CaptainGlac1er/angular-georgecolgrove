import { TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { ProjectsService } from '../../../../service/projects.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";
import {RouterTestingHarness} from "@angular/router/testing";
import {MockProvider} from "ng-mocks";
import {EMPTY} from "rxjs";
import {Title} from "@angular/platform-browser";

describe('ProjectComponent', () => {
    let harness: RouterTestingHarness;
    let component: ProjectComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ProjectComponent],
            providers: [
                { provide: IS_BROWSER, useValue: true },
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                MockProvider(ProjectsService, { getProject: () => EMPTY }),
                MockProvider(Title),
                provideRouter([
                    { path: 'projects/:project', component: ProjectComponent },
                    { path: '**', redirectTo: '' },
                ]),
            ],
        });

        harness = await RouterTestingHarness.create();
        component = await harness.navigateByUrl('/projects/test', ProjectComponent);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
