import { Component } from '@angular/core';
import { USER_SIGN_UP_FORM_CONFIG } from '../../../../assets/config/user-onboarding.config';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-complete-profile',
  standalone: false,
  templateUrl: './complete-profile.component.html',
  styleUrls:[ './complete-profile.component.scss']
})
export class CompleteProfileComponent {
constructor(private authService:AuthService){
  console.log("complete profile component loaded");
debugger   }

currentUser:any;

ngOnInit(){
this.currentUser=this.authService.getCurrentUser();
console.log(this.currentUser);

}

formFIelds=USER_SIGN_UP_FORM_CONFIG;

onSubmit(data:any){
 this.authService.editUser(data)?.subscribe((res:any)=>{
  console.log(res); 
 debugger
 })
}

}
