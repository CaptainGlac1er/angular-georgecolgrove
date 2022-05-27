import { isPlatformBrowser } from '@angular/common';
import { InjectionToken } from '@angular/core';

export const
  WINDOW = new InjectionToken<Window>('WINDOW'),
  LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE'),
  IS_BROWSER = new InjectionToken<boolean>('IS_BROWSER');

export function getWindow(ifRunningInBrowser: boolean): Window {
  return ifRunningInBrowser ? window : undefined;
}

export function getLocalStorage(ifRunningInBrowser: boolean, window: Window): Storage {
  return ifRunningInBrowser ? window.localStorage : null;
}

export function isBrowser(platformId: Record<string, unknown>): boolean {
  return isPlatformBrowser(platformId);
}
