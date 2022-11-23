import { TestBed } from '@angular/core/testing';

import { NoHeaderRouteComponent } from './no-header-route.component';
import { TestComponentContext } from '../../interfaces/TestComponentContext';
import { RouterTestingModule } from '@angular/router/testing';

describe('NoHeaderRouteComponent', () => {
  type NoHeaderRouteComponentTest = TestComponentContext<NoHeaderRouteComponent>
  beforeEach(async function(this: NoHeaderRouteComponentTest) {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        NoHeaderRouteComponent
      ]
    })
    .compileComponents();

    this.fixture = TestBed.createComponent(NoHeaderRouteComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should create', async function(this: NoHeaderRouteComponentTest) {
    expect(this.component).toBeTruthy();
  });
});
