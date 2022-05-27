import { SharedModule } from './shared.module';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SharedModule', () => {
  let module: SharedModule;
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    module = TestBed.inject(SharedModule);
    done();
  });

  it('should create an instance',  () => {
    expect(module).toBeTruthy();
  });
});
