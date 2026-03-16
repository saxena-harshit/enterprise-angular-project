import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { AUTHUSER } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';
import { EncryptionService } from './encryption.service';
import { StorageService } from './storage.service';
import { STORAGE_KEYS } from '../constants/storage.constans';
import { enc } from 'crypto-js';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
  userService=inject(UserService)
  
  

  private currentUserSubject = new BehaviorSubject<User|null>(null);
  currrentUser$=this.currentUserSubject.asObservable();
  constructor(private http :HttpClient,private encryption:EncryptionService,private store:StorageService) {this.getUser(); }

  login(username:string, password:string){
    return this.http.post(`${environment.apiUrl}${API_ENDPOINTS.login}`,{username,password}).pipe(switchMap((user:any)=>{
      
      const encrypted_token= this.encryption.encrypt(user.accessToken);
     return this.userService.getUserByID(user.id).pipe(tap((res:User)=>{

      user.accessToken=encrypted_token;
      this.store.set(STORAGE_KEYS.TOKEN,encrypted_token);
      this.store.set(STORAGE_KEYS.USER,res);
      this.currentUserSubject.next(res);
      console.log(res.role)
      }))
      
     
    }))

    

  }


  logOut(){
    this.store.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }


  getToken(){
   const encrypted= this.store.get(STORAGE_KEYS.TOKEN);
   return encrypted? this.encryption.decrypt(encrypted):null;
  }


  isAuthenticated(){
    return !!this.getToken();
  }

  getCurrentUser(){

    const currentUser=this.currentUserSubject.value;
    
    console.log("getcurrentuser",currentUser?.role,currentUser)
    return currentUser;

  
  }

  private getUser(){
    const user = this.store.get(STORAGE_KEYS.USER);
    if( user){
      this.currentUserSubject.next(user)
    }

  }
}
