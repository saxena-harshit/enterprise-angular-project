import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormJobApplicationComponent } from './dynamic-form-job-application.component';

describe('DynamicFormJobApplicationComponent', () => {
  let component: DynamicFormJobApplicationComponent;
  let fixture: ComponentFixture<DynamicFormJobApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormJobApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
