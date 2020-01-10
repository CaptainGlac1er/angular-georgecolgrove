import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Meta, Title } from '@angular/platform-browser';
import { TestComponentContext } from '../interfaces/TestComponentContext';
import { RouterTestingModule } from '@angular/router/testing';
import { IS_BROWSER } from '@shared/providers';

describe('AppComponent', () => {
  interface AppComponentTest extends TestComponentContext<AppComponent> {
    titleService: Title;
    metaService: Meta;
  }
  describe('Browser', () => {
    beforeEach(async function (this: AppComponentTest) {
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
          { provide: IS_BROWSER, useValue: true }
        ]
      }).compileComponents();
      this.fixture = TestBed.createComponent(AppComponent);
      this.component = this.fixture.componentInstance;
    });
    it('should create the app', async function (this: AppComponentTest) {
      expect(this.component).toBeTruthy();
    });
    it(`should have as title`, async function (this: AppComponentTest) {
      this.component.ngOnInit();
      expect(this.component.title).toEqual('George Walter Colgrove IV - Personal Website');
    });
  });
});
