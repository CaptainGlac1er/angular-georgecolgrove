import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHeaderRouteComponent } from './normal-header-route.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared/shared.module';

describe('NormalHeaderRouteComponent', () => {
  let component: NormalHeaderRouteComponent;
  let fixture: ComponentFixture<NormalHeaderRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NormalHeaderRouteComponent,
        MockModule(SharedModule)
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
