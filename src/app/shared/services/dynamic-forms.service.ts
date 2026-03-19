import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFields } from '../models/form-fields';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {


  constructor(private fb:FormBuilder) { }

  creatForm(fields:FormFields[]){
    const group:any={};

    fields.forEach(field=>{
    const validators=[];

    if(field.required){
      validators.push(Validators.required);
    }
    group[field.name]=['',validators]
    })
    return this.fb.group(group);


  


  }


}
