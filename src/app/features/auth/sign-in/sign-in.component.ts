import { Component, inject } from '@angular/core';
import { FormFields } from '../../../shared/models/form-fields';
import { AuthService } from '../../../core/services/auth.service';
import { signUpFields } from '../../../../assets/config/user-signup-form.config';
import { Router } from '@angular/router';
import { PopupComponent } from '../../../shared/components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {



  formConfig = signUpFields;
  constructor(private authService:AuthService,private router:Router,private dialog: MatDialog){}

  onSubmit(data:any){
    console.log("helo world");
    console.log(data);
    debugger
  
   
    this.authService.signIn(data).subscribe((user:any)=>{
      console.log(user);
      if(user){
      
        console.log("hello");
        debugger
        if(user){
          // this.router.navigate(['/completeProfile']);
          this.openPopup();
          
          debugger
        }
        
      }
    })

    
    
  }

 
openPopup() {
  const dialogRef = this.dialog.open(PopupComponent, {
    width: '350px',
    data: {
      title: 'Account Created',
      message: 'User Created Successfully.'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('User clicked:', result);

  });

}
}
