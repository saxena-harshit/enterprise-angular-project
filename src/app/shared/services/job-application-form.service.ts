import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationFormService {

  constructor(private fb:FormBuilder) { }

createForm(config:any){
  const form= this.fb.group({});
  config.steps.forEach((step:any) => {
    step.fields.forEach((fields:any) => {
      this.addFields(form,fields)
      
    });
    
  });
  return form;
}



addFields(form:FormGroup  ,fields:any){


  if(fields.type==="group"){
    const group = this.fb.group({});

    fields.fields.forEach((subFields:any) => {
      this.addFields(group,subFields)
      
    });

    form.addControl(fields.name,group);
    return;
  }
  if(fields.type==='formArray'){

    const formArray=this.fb.array([]);
    form.addControl(fields.name,formArray);
    return;
  }

const validators=[];
if(fields.required){
  validators.push(Validators.required);
}
if(fields.validators?.minLength){
  validators.push(Validators.minLength(fields.validators.minLength));
}
if(fields.validators?.maxLength){
  validators.push(Validators.maxLength(fields.validators.maxLength));
}
if(fields.validators?.pattern){
  validators.push(Validators.pattern(fields.validators.pattern));
}


const control=this.fb.control('',validators);
form.addControl(fields.name,control)
}


addFormArrayItem(form:FormGroup,fields:any){
  debugger
  const formArray=form.get(fields.name) as FormArray;

const group = this.fb.group({});
fields.fields.forEach((subFields:any)=>{
  this.addFields(group,subFields);
   
})
formArray.push(group);
}

removeFormArrayItem(form:FormGroup,arrayName:any,index:number){
  const formArray= form.get(arrayName) as FormArray;
  formArray.removeAt(index);
}
}

