import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHeaderComponent } from './row-header.component';

describe('RowHeaderComponent', () => {
  let component: RowHeaderComponent;
  let fixture: ComponentFixture<RowHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowHeaderComponent]
    });
    fixture = TestBed.createComponent(RowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
