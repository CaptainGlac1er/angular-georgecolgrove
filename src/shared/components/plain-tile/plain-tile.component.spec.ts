import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlainTileComponent } from './plain-tile.component';

describe('PlainTileComponent', () => {
  let component: PlainTileComponent;
  let fixture: ComponentFixture<PlainTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
