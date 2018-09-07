import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {OrderDatePipe} from '../../pipes/order-date.pipe';
import {MockComponent, MockPipe} from 'ng-mocks';
import {PanelRowComponent} from '../../shared/panel-row/panel-row.component';
import {RouterModule} from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent,
        MockPipe(OrderDatePipe),
        MockComponent(PanelRowComponent)
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
