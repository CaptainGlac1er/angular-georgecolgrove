import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrettyTileComponent } from './pretty-tile.component';

describe('PrettyTileComponent', () => {
  let component: PrettyTileComponent;
  let fixture: ComponentFixture<PrettyTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({})
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
