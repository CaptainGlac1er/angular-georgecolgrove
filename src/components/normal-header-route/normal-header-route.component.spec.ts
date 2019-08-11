import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHeaderRouteComponent } from './normal-header-route.component';

describe('NormalHeaderRouteComponent', () => {
  let component: NormalHeaderRouteComponent;
  let fixture: ComponentFixture<NormalHeaderRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalHeaderRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalHeaderRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
