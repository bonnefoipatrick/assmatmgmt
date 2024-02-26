import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShSelectComponent } from './sh-select.component';

describe('ShSelectComponent', () => {
  let component: ShSelectComponent;
  let fixture: ComponentFixture<ShSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
