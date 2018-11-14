import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as WebFont from 'webfontloader' ;

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', async () => {
  await platformBrowserDynamic().bootstrapModule(AppModule);
});

async function addIcons(): Promise<void> {
  WebFont.load({
    google: {
      families: ['Material Icons', 'Roboto']
    }
  });
  return Promise.resolve();
}
addIcons();
