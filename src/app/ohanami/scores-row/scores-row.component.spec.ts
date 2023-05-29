import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresRowComponent } from './scores-row.component';

describe('ScoresRowComponent', () => {
  let component: ScoresRowComponent;
  let fixture: ComponentFixture<ScoresRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoresRowComponent]
    });
    fixture = TestBed.createComponent(ScoresRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
