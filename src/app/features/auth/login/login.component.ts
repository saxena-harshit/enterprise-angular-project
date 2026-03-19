import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormFields } from '../../../shared/models/form-fields';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error = '';

  formFields:FormFields[]=[ {
    type: 'text',
    label: 'username',
    name: 'username',
    required: true,
        placeholder:'Enter username'

  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    required: true,
        placeholder:'Enter user Password'

  },];
  

  loginForm!: FormGroup;
  constructor(
   
    private authService: AuthService,
    private router: Router,
  ) {
   
  }

  onSubmit(data:any) {
    let user = {
      username: data.username,
      password: data.password,
    };

    this.authService.login(user.username, user.password).subscribe({
      next: () => {
        const currentUser = this.authService.getCurrentUser();
        if (currentUser?.role == 'admin') {
          this.router.navigate(['/dashboard/admin']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
     
      complete: () => {
        console.log('done');
      },
    });
  }
}
