import { SharedModule } from './shared.module';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    sharedModule = TestBed.get(SharedModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(sharedModule).toBeTruthy();
    done();
  });
});
