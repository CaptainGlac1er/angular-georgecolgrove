import { ComponentFixture } from '@angular/core/testing';

export interface TestComponentContext<T, H> {
  fixture: ComponentFixture<T>;
  component: T;
  sharedVariables: H;
}
