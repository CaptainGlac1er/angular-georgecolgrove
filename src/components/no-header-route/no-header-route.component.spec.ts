import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHeaderRouteComponent } from './no-header-route.component';

describe('NoHeaderRouteComponent', () => {
  let component: NoHeaderRouteComponent;
  let fixture: ComponentFixture<NoHeaderRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoHeaderRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoHeaderRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
