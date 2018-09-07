import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MockComponent} from 'ng-mocks';
import {HeaderComponent} from '../shared/header/header.component';
import {Router, RouterModule} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(HeaderComponent)
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  });
  it('should create the app', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    await expect(app).toBeTruthy();
  });
  it(`should have as title 'app'`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    await expect(app.title).toEqual('George Walter Colgrove IV - Personal Website');
  });
});
