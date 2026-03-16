import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { API_ENDPOINTS } from '../../core/constants/api-endpoints.constants';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  getAllUsers(){
   return  this.http.get<User>(`${environment.apiUrl}${API_ENDPOINTS.getallUsers}`);
  }
}
