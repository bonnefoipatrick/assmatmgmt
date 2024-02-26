import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShNumberInputComponent } from './sh-number-input.component';

describe('ShNumberInputComponent', () => {
  let component: ShNumberInputComponent;
  let fixture: ComponentFixture<ShNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
