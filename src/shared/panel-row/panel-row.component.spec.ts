import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRowComponent } from './panel-row.component';

describe('PanelRowComponent', () => {
  let component: PanelRowComponent;
  let fixture: ComponentFixture<PanelRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
      .compileComponents();

    fixture = TestBed.createComponent(PanelRowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
