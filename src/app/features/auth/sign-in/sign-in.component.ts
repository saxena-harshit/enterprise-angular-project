import { Component } from '@angular/core';
import { FormFields } from '../../../shared/models/form-fields';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  formFields:FormFields[]=[
   
  {
    type: 'text',
    label: 'Username',
    name: 'username',
    required: true,
    placeholder:'enter UserName'
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    required: true,
        placeholder:'enter user email'

  },

  {
    type: 'select',
    label: 'Role',
    name: 'role',
    options: ['ADMIN','USER']
  }
  ]


  onSubmit(data:any){
    console.log("helo world");
    console.log(data);
    
    
  }
}
