import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormsService } from '../../services/dynamic-forms.service';
import { FormFields } from '../../models/form-fields';

@Component({
  selector: 'app-dynamicform',
  standalone: false,
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent {

@Input() fields:FormFields[]=[]

  @Output() formSubmit = new EventEmitter<any>();

  myForm!:FormGroup;

  constructor(private dynamicFormService:DynamicFormsService){}
  ngOnInit(){
    this.myForm=this.dynamicFormService.creatForm(this.fields)
  }

  onSubmit(){
   if (this.myForm.valid) {
      this.formSubmit.emit(this.myForm.value);
      setTimeout(() => {
        this.myForm.reset()
      }, 3000);

    } 
  }

}
