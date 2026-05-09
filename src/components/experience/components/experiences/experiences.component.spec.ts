import { TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { ExperienceService } from '../../../../service/experience.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {MockProvider} from "ng-mocks";
import {Title} from "@angular/platform-browser";
import {EMPTY} from "rxjs";
import {RouterTestingHarness} from "@angular/router/testing";

describe('ExperiencesComponent', () => {
    let harness: RouterTestingHarness;
    let component: ExperiencesComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ExperiencesComponent],
            providers: [
                { provide: IS_BROWSER, useValue: true },
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                MockProvider(ExperienceService, { fetchProjects: () => EMPTY }),
                MockProvider(Title),
                provideRouter([
                    { path: 'experiences', component: ExperiencesComponent },
                    { path: '**', redirectTo: '' },
                ]),
            ],
        });
        harness = await RouterTestingHarness.create();
        component = await harness.navigateByUrl('/experiences', ExperiencesComponent);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});