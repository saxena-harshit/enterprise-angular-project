import { Component } from '@angular/core';
import { FormFields } from '../../../shared/models/form-fields';
import { USER_SIGN_UP_FORM_CONFIG } from '../../../../assets/config/user-signup-form.config';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {



  formConfig = USER_SIGN_UP_FORM_CONFIG;

  onSubmit(data:any){
    console.log("helo world");
    console.log(data);
    
    
  }
}
