import { isPlatformBrowser } from '@angular/common';

export const
  WINDOW = 'WINDOW',
  LOCAL_STORAGE = 'LOCAL_STORAGE',
  IS_BROWSER = 'IS_BROWSER';

export function getWindow(): Window {
  return window;
}

export function getLocalStorage(window: Window): Storage {
  return window ? window.localStorage : null;
}

export function isBrowser(platformId: Record<string, any>): boolean {
  return isPlatformBrowser(platformId);
}
