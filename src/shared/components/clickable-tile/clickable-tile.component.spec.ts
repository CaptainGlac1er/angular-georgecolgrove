import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClickableTileComponent } from './clickable-tile.component';
import { provideRouter } from "@angular/router";

describe('ClickableTileComponent', () => {
  let component: ClickableTileComponent;
  let fixture: ComponentFixture<ClickableTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        providers: [
        provideRouter([])
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
