import { SharedModule } from './shared.module';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SharedModule', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    this.sharedModule = TestBed.get(SharedModule);
    done();
  });

  it('should create an instance', async (done) => {
    await expect(this.sharedModule).toBeTruthy();
    done();
  });
});
