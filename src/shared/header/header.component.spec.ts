import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MockComponent, MockPipe} from 'ng-mocks';

import { HeaderComponent } from './header.component';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent,
        MockComponent(NavigationBarComponent)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
