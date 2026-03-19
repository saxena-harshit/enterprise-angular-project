import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EncryptionService } from './encryption.service';
import { StorageService } from './storage.service';
import { environment } from '../../../environment/environment';
import { STORAGE_KEYS } from '../constants/storage.constans';
import { AuthService } from './auth.service';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
tokenExpired$:Subject<boolean>=new Subject<boolean>();
  constructor(private http :HttpClient,private encryption:EncryptionService,private store:StorageService,private auth:AuthService) { }


  

   refreshToken(){
    let token=this.auth.getRefreshToken();
   
       return this.http.post(`${environment.apiUrl}${API_ENDPOINTS.refreshToken}`,{refreshToken:token,expiresInMins:1}).subscribe((res:any)=>{
        
        const encrypted_token= this.encryption.encrypt(res.accessToken);
        const encrypted_refresh_token=this.encryption.encrypt(res.refreshToken);
        debugger
        this.store.set(STORAGE_KEYS.TOKEN,encrypted_token);
        this.store.set(STORAGE_KEYS.REFRESHTOKEN,encrypted_refresh_token);
        
        
      })
  
    }
}
