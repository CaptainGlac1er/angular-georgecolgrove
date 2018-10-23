import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {PanelRowComponent} from '../../../../shared/panel-row/panel-row.component';
import {MockComponent, MockPipe} from 'ng-mocks';
import {OrderDatePipe} from '../../../../shared/pipes/order-date.pipe';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectComponent,
        MockPipe(OrderDatePipe),
        MockComponent(PanelRowComponent)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
