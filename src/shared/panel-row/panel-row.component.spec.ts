import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MockComponent, MockPipe, MockDeclaration} from 'ng-mocks';

import { PanelRowComponent } from './panel-row.component';
import {OrderDatePipe} from '../pipes/order-date.pipe';
import {RouterTestingModule} from '@angular/router/testing';

describe('PanelRowComponent', () => {
  let component: PanelRowComponent;
  let fixture: ComponentFixture<PanelRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PanelRowComponent,
        MockPipe(OrderDatePipe),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
