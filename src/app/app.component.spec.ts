import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {TestComponentContext} from '../interfaces/TestComponentContext';
import {ExperiencesComponent} from '../components/experience/components/experiences/experiences.component';

describe('AppComponent', () => {
  interface AppComponentTest {
    titleService: Title;
    metaService: Meta;
  }
  beforeEach(async function (this: TestComponentContext<AppComponent, AppComponentTest>) {
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
  });
  it('should create the app', async function (this: TestComponentContext<AppComponent, AppComponentTest>) {
    await expect(this.component).toBeTruthy();
  });
  it(`should have as title`, async function (this: TestComponentContext<AppComponent, AppComponentTest>) {
    this.component.ngOnInit();
    expect(this.component.title).toEqual('George Walter Colgrove IV - Personal Website');
  });
});
