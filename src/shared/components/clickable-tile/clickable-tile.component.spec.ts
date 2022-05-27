import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClickableTileComponent } from './clickable-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClickableTileComponent', () => {
  let component: ClickableTileComponent;
  let fixture: ComponentFixture<ClickableTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ClickableTileComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
