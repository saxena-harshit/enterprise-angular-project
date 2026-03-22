import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { map, tap } from 'rxjs';
import { AdminService } from '../../../shared/services/admin.service';

@Component({
  selector: 'app-all-users',
  standalone: false,
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {
 userList:User[]=[]
  constructor(private adminService:AdminService ){
   
  }
  
  ngOnInit() {
    this.adminService.getAllUsers().subscribe({
      next: (users: any) => {
       this.userList = users.users.map((user: any) => {
  const { password, ...rest } = user;
  return rest;
}); 
      },
    });
  }

}
