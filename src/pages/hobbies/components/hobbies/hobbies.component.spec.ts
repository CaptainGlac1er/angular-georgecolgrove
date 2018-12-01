import { TestBed } from '@angular/core/testing';

import { HobbiesComponent } from './hobbies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HobbiesComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HobbiesComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(HobbiesComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
