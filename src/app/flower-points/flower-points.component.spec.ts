import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerPointsComponent } from './flower-points.component';

describe('FlowerPointsComponent', () => {
  let component: FlowerPointsComponent;
  let fixture: ComponentFixture<FlowerPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerPointsComponent]
    });
    fixture = TestBed.createComponent(FlowerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
