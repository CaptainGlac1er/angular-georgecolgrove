import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHeaderRouteComponent } from './normal-header-route.component';
import { provideRouter } from "@angular/router";

describe('NormalHeaderRouteComponent', () => {
  let component: NormalHeaderRouteComponent;
  let fixture: ComponentFixture<NormalHeaderRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NormalHeaderRouteComponent
      ],
      providers: [
          provideRouter([])
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
