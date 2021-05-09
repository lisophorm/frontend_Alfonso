import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexWidgetComponent } from './complex-widget.component';

describe('ComplexWidgetComponent', () => {
  let component: ComplexWidgetComponent;
  let fixture: ComponentFixture<ComplexWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
