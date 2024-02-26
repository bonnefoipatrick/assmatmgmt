import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShDateInputComponent } from './sh-date-input.component';

describe('ShDateInputComponent', () => {
  let component: ShDateInputComponent;
  let fixture: ComponentFixture<ShDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
