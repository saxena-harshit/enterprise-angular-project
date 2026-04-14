import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMultiStepFormComponent } from './dynamic-multi-step-form.component';

describe('DynamicMultiStepFormComponent', () => {
  let component: DynamicMultiStepFormComponent;
  let fixture: ComponentFixture<DynamicMultiStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicMultiStepFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicMultiStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
