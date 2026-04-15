import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { RefreshTokenService } from '../../core/services/refresh-token.service';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  
  constructor(private tokenRefresh:RefreshTokenService,private store:StorageService){
  console.log("layout loaded");
  
    this.tokenRefresh.tokenExpired$.subscribe((res:any)=>{
      if(res){
        tokenRefresh.refreshToken();

      }
    })
  }
}
