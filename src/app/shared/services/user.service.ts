import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { API_ENDPOINTS } from '../../core/constants/api-endpoints.constants';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserByID(userId:number){
    return this.http.get<User>(`${environment.apiUrl}${API_ENDPOINTS.getUserById}${userId}`);
  }
}
