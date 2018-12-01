import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MobileService } from '@service/mobile.service';

describe('HeaderComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        MobileService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();

    this.fixture = TestBed.createComponent(HeaderComponent);
    this.component = this.fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
});
