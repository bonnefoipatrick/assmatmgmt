import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShTextInputComponent } from './sh-text-input.component';

describe('ShTextInputComponent', () => {
  let component: ShTextInputComponent;
  let fixture: ComponentFixture<ShTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
