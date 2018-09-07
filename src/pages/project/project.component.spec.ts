import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {PanelRowComponent} from '../../shared/panel-row/panel-row.component';
import {MockComponent, MockPipe} from 'ng-mocks';
import {OrderDatePipe} from '../../pipes/order-date.pipe';
import {RouterModule} from '@angular/router';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectComponent,
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
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
