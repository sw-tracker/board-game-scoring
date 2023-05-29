import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhanamiComponent } from './ohanami.component';

describe('OhanamiComponent', () => {
  let component: OhanamiComponent;
  let fixture: ComponentFixture<OhanamiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OhanamiComponent]
    });
    fixture = TestBed.createComponent(OhanamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
