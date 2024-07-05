import { TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExperienceService } from '../../../../service/experience.service';
import { Title } from '@angular/platform-browser';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestComponentContext } from '../../../../interfaces/TestComponentContext';
import { OrderDatePipe } from '../../../../shared/pipes/order-date.pipe';
import { IS_BROWSER, WINDOW } from '../../../../shared/providers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HomePageComponent', () => {
  interface HomePageComponentTest extends TestComponentContext<HomePageComponent> {
    window: {
      scrollY: number;
    };
  }
  describe('Browser', () => {
    beforeEach(async function (this: HomePageComponentTest) {
      await TestBed.configureTestingModule({
    declarations: [
        HomePageComponent,
        OrderDatePipe,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [RouterTestingModule],
    providers: [
        ExperienceService,
        Title,
        { provide: IS_BROWSER, useValue: true },
        { provide: WINDOW, useValue: {
                scrollY: 0,
            }
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
        .compileComponents();
      this.fixture = TestBed.createComponent(HomePageComponent);
      this.component = this.fixture.componentInstance;
      this.window = TestBed.inject(WINDOW);
    });

    it('should create', async function (this: HomePageComponentTest) {
      expect(this.component).toBeTruthy();
    });

    describe('onWindowScroll', () => {
      it('should not minimize', async function (this: HomePageComponentTest) {
        this.window.scrollY = 250;
        this.component.onWindowScroll();
        expect(this.component.isMinimized).toBe(true);
      });

      it('should minimize', async function (this: HomePageComponentTest) {
        this.window.scrollY = 251;
        this.component.onWindowScroll();
        expect(this.component.isMinimized).toBe(false);
      });
    });
  });
});
