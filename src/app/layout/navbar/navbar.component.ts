import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

currUser:any;

constructor(private authService:AuthService){
}
ngOnInit(){
  
  this.currUser=this.authService.getCurrentUser();
  
}


  logOut(){
    this.authService.logOut();




  }
}
