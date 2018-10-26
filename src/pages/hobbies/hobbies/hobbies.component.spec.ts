import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HobbiesComponent} from './hobbies.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;

  beforeEach(async (done) => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HobbiesComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    done();
  });

  it('should create', async (done) => {
    await expect(component).toBeTruthy();
    done();
  });
});
