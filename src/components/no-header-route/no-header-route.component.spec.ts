import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHeaderRouteComponent } from './no-header-route.component';
import { MockComponent } from 'ng-mocks';
import { RouterOutlet } from '@angular/router';
import { TestComponentContext } from '../../interfaces/TestComponentContext';

describe('NoHeaderRouteComponent', () => {
  type NoHeaderRouteComponentTest = TestComponentContext<NoHeaderRouteComponent>
  beforeEach(async function(this: NoHeaderRouteComponentTest) {
    await TestBed.configureTestingModule({
      declarations: [
        NoHeaderRouteComponent,
        MockComponent(RouterOutlet)
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
