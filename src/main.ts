import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as WebFont from 'webfontloader';

if (environment.production) {
  enableProdMode();
}

async function setupIcons(): Promise<void> {
  WebFont.load({
    google: {
      families: ['Material Icons', 'Roboto']
    }
  });
  return Promise.resolve();
}

document.addEventListener('DOMContentLoaded', async () => {
  await setupIcons();
  await platformBrowserDynamic().bootstrapModule(AppModule);
});
