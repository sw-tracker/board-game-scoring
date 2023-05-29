import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreInputComponent } from './score-input.component';

describe('ScoreInputComponent', () => {
  let component: ScoreInputComponent;
  let fixture: ComponentFixture<ScoreInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreInputComponent]
    });
    fixture = TestBed.createComponent(ScoreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
