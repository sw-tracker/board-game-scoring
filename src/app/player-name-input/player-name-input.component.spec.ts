import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNameInputComponent } from './player-name-input.component';

describe('PlayerNameInputComponent', () => {
  let component: PlayerNameInputComponent;
  let fixture: ComponentFixture<PlayerNameInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerNameInputComponent]
    });
    fixture = TestBed.createComponent(PlayerNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
