import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from '../../models/formField.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicMultistepFormService {

  constructor(private fb:FormBuilder) { }


  createForm(config:any,user:any){
    console.log(user);
    
       
    const form= this.fb.group({});
    config.steps.forEach((step:any) => {
      step.fields.forEach((field:any) => {
      if (field.name === "username") {
  field.value = user?.username;
}

if (field.name === "email") {
  field.value = user?.email;
}

if (field.name === "firstName") {
  field.value = user?.firstName;
}

if (field.name === "lastName") {
  field.value = user?.lastName;
}

if (field.name === "maidenName") {
  field.value = user?.maidenName;
}

console.log(field.value);
        this.addFields(form,field,field.value);
        
      });
      
    });
    return form;
  }
addFields(form:FormGroup,field:any,fieldValue:any ){
  if(field.type==="group"){
    const subForm=this.fb.group({});
    field.fields.forEach((subField:any)=>{
      this.addFields(subForm,subField,fieldValue);


    })
    form.addControl(field.name,subForm);
    return;
  }

  const validators=[];
  if( field.required){
    validators.push(Validators.required)
  }
  form.addControl(field.name,this.fb.control( {
      value: fieldValue || '',
      disabled: !!fieldValue   // 👈 disables if value exists
    },validators));
}
}
