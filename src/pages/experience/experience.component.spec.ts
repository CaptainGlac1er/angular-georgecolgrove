import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperienceComponent} from './experience.component';
import {OrderDatePipe} from '../../pipes/order-date.pipe';
import {MockPipe, MockComponent} from 'ng-mocks';
import {PanelRowComponent} from '../../shared/panel-row/panel-row.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExperienceComponent,
        MockPipe(OrderDatePipe),
        MockComponent(PanelRowComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
