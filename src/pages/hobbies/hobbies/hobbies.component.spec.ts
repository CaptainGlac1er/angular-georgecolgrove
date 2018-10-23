import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MockComponent, MockPipe} from 'ng-mocks';

import { HobbiesComponent } from './hobbies.component';
import {PanelRowComponent} from '../../../shared/panel-row/panel-row.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HobbiesComponent,
        MockComponent(PanelRowComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
