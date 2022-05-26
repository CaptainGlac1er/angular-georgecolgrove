import { TestBed } from '@angular/core/testing';

import { NormalHeaderRouteComponent } from './normal-header-route.component';
import { TestComponentContext } from '../../interfaces/TestComponentContext';
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

describe('NormalHeaderRouteComponent', () => {
  type NormalHeaderRouteComponentTest = TestComponentContext<NormalHeaderRouteComponent>

  beforeEach(async function(this: NormalHeaderRouteComponentTest) {
    TestBed.configureTestingModule({
      declarations: [ 
        NormalHeaderRouteComponent,
        MockComponent(HeaderComponent),
        MockComponent(FooterComponent),
        MockComponent(RouterOutlet),
      ]
    })
    .compileComponents();
    this.fixture = TestBed.createComponent(NormalHeaderRouteComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  afterEach(async function(this: NormalHeaderRouteComponentTest) {
    this.fixture.destroy();
  });

  it('should create', async function(this: NormalHeaderRouteComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
