import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { JobApplicationFormService } from '../../services/job-application-form.service';
import { JOB_APPLICATION_FORM_CONFIG } from '../../../../assets/config/job-application-form.config';

@Component({
  selector: 'app-dynamic-form-job-application',
  standalone: false,
  templateUrl: './dynamic-form-job-application.component.html',
  styleUrl: './dynamic-form-job-application.component.scss',
})
export class DynamicFormJobApplicationComponent {
  myForm!: FormGroup;
  currentStep = 0;
  config = JOB_APPLICATION_FORM_CONFIG;
  constructor(private jobFormService: JobApplicationFormService) {}
  ngOnInit() {
    debugger;
    this.myForm = this.jobFormService.createForm(this.config);
  }

  addItem(field: string) {
    debugger;
    this.jobFormService.addFormArrayItem(this.myForm, field);
  }

  getFormArray(name: string): FormArray {
    return this.myForm.get(name) as FormArray;
  }
  removeItem(field: string, index: number) {
    this.jobFormService.removeFormArrayItem(this.myForm, field, index);
  }

  getGroup(parent: FormGroup, groupName: string): FormGroup {
    return parent.get(groupName) as FormGroup;
  }

  getFormGroup(name: string): FormGroup {
    return this.myForm.get(name) as FormGroup;
  }
  get currentStepConfig() {
    return this.config.steps[this.currentStep];
  }
  nextStep() {
    if (this.currentStep < this.config.steps.length - 1) {
      this.currentStep++;
      console.log(this.currentStep);
    }
  }
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      console.log(this.currentStep);
    }
  }
  print() {
    console.log(this.myForm.value);
  }
}
