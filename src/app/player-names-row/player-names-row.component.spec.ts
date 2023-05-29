import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNamesRowComponent } from './player-names-row.component';

describe('PlayerNamesRowComponent', () => {
  let component: PlayerNamesRowComponent;
  let fixture: ComponentFixture<PlayerNamesRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerNamesRowComponent]
    });
    fixture = TestBed.createComponent(PlayerNamesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
