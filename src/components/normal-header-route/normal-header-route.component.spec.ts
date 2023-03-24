import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHeaderRouteComponent } from './normal-header-route.component';
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NormalHeaderRouteComponent', () => {
  let component: NormalHeaderRouteComponent;
  let fixture: ComponentFixture<NormalHeaderRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ 
        NormalHeaderRouteComponent,
        MockComponent(HeaderComponent),
        MockComponent(FooterComponent)
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NormalHeaderRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    fixture.destroy();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
