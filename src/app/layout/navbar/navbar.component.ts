import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { RefreshTokenService } from '../../core/services/refresh-token.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

currUser:any;

constructor(private authService:AuthService,private refreshTokenservice:RefreshTokenService){
}


ngOnInit(){
  
  this.currUser=this.authService.getCurrentUser();
  
}


  logOut(){
    this.authService.logOut();

  }

  refreshToken(){

    this.refreshTokenservice.refreshToken();



  }
}
