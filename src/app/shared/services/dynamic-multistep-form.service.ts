import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from '../../models/formField.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicMultistepFormService {

  constructor(private fb:FormBuilder) { }


  createForm(config:any){
    const form= this.fb.group({});
    config.steps.forEach((step:any) => {
      step.fields.forEach((field:any) => {
        this.addFields(form,field)
        
      });
      
    });
    return form;
  }
addFields(form:FormGroup,field:any ){
  if(field.type==="group"){
    const subForm=this.fb.group({});
    field.fields.forEach((subField:any)=>{
      this.addFields(subForm,subField);


    })
    form.addControl(field.name,subForm);
    return;
  }

  const validators=[];
  if( field.required){
    validators.push(Validators.required)
  }
  form.addControl(field.name,this.fb.control('',validators));
}
}
