import { ApplicationConfig, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { appRoutes } from './app.routing';
import { getLocalStorage, getWindow, IS_BROWSER, isBrowser, LOCAL_STORAGE, WINDOW } from '../shared/providers';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {provideServerRendering, withRoutes} from "@angular/ssr";
import {serverRoutes} from "./app.routes.server";

export const config: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: WINDOW, useFactory: getWindow, deps: [IS_BROWSER] },
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage, deps: [IS_BROWSER, WINDOW] },
    { provide: IS_BROWSER, useFactory: isBrowser, deps: [PLATFORM_ID] }
  ]
};
