import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { ExperienceService } from '../../../../service/experience.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IS_BROWSER } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from "@angular/router";
import {RouterTestingHarness} from "@angular/router/testing";
import {MockProvider} from "ng-mocks";
import {Title} from "@angular/platform-browser";
import {EMPTY} from "rxjs";

describe('ExperienceComponent', () => {
    let harness: RouterTestingHarness;
    let component: ExperienceComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ExperienceComponent],
            providers: [
                { provide: IS_BROWSER, useValue: true },
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                MockProvider(ExperienceService, { getJob: () => EMPTY }),
                MockProvider(Title),
                provideRouter([
                    { path: 'experiences/:company', component: ExperienceComponent }
                ]),
            ],
        });
        harness = await RouterTestingHarness.create();
        component = await harness.navigateByUrl('/experiences/test', ExperienceComponent);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
