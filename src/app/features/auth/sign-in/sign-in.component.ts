import { Component } from '@angular/core';
import { FormFields } from '../../../shared/models/form-fields';
import { AuthService } from '../../../core/services/auth.service';
import { signUpFields } from '../../../../assets/config/user-signup-form.config';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {



  formConfig = signUpFields;
  constructor(private authService:AuthService){}

  onSubmit(data:any){
    console.log("helo world");
    console.log(data);
    debugger
  
   
    this.authService.signIn(data).subscribe((user:any)=>{
      console.log(user)
    })

    
    
  }
}
