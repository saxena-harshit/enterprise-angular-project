import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicMultistepFormService } from '../services/dynamic-multistep-form.service';

@Component({
  selector: 'app-dynamic-multi-step-form',
  standalone: false,
  templateUrl: './dynamic-multi-step-form.component.html',
  styleUrl: './dynamic-multi-step-form.component.scss'
})
export class DynamicMultiStepFormComponent {

  @Input() formConfig:any;
  @Output() formSubmit=new EventEmitter();
  
  myform!:FormGroup;

  currentStep =0 ;

  constructor(private dfs:DynamicMultistepFormService){}
  ngOnInit(){
    this.myform=this.dfs.createForm(this.formConfig);
  }


  nextStep(){
    if(this.currentStep<this.formConfig.steps.length-1 && this.isStepValid()){
      this.currentStep++;
    }

  }


  prevStep(){
    if(this.currentStep!==0){
      this.currentStep--;
    }

  }

  isStepValid(){
    const currentFields=this.formConfig.steps[this.currentStep].fields;

    for(let field of currentFields){
      const control = this.myform.get(field.name);
      if( !control) return false;
      if(control.invalid){
        return false;
      }
    }
    return true;
  }

  onSubmit(){
 if (this.myform.valid) {
      this.formSubmit.emit(this.myform.value);
    }   }



}
