import { Component } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { User } from '../../../models/user.model';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userList:User[]=[]
  constructor(private adminService:AdminService ){
   
  }
  ngOnInit(){
    
     this.adminService.getAllUsers().pipe(
      tap((res:any)=>{
       
      console.log("user comp : ",res);
      
     }
    ),map((res:any)=>res.users),map((users:User[])=>users.filter(user=>user.role==="user"))
    ).subscribe(
      {next:(res:User[])=>{
        this.userList = res.map((user: any) => {
  const { password, ...rest } = user;

  
  return rest;
}); 
debugger
console.log("userlist",this.userList);

      }}
    )

  }

}
