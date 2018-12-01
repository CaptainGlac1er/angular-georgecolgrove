import { TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavigationBarComponent', () => {

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavigationBarComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    this.fixture = TestBed.createComponent(NavigationBarComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
