import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyTileComponent } from './pretty-tile.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PrettyTileComponent', () => {
  let component: PrettyTileComponent;
  let fixture: ComponentFixture<PrettyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyTileComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
