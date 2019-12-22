import { ComponentFixture } from '@angular/core/testing';

export interface TestComponentContext<T> {
  fixture: ComponentFixture<T>;
  component: T;
}
