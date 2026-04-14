import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormFields } from '../../../shared/models/form-fields';
import { formFields } from '../../../../assets/config/user-login-form.config';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error = '';

  formFields=formFields;

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
