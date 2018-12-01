import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        Title,
        Meta,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppComponent);
    this.component = this.fixture.componentInstance;
    done();
  });
  it('should create the app', async (done) => {
    await expect(this.component).toBeTruthy();
    done();
  });
  it(`should have as title`, async (done) => {
    this.component.ngOnInit();
    await expect(this.component.title).toEqual('George Walter Colgrove IV - Personal Website');
    done();
  });
});
