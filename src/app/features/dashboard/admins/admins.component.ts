import { Component } from '@angular/core';
import { tap, map } from 'rxjs';
import { User } from '../../../models/user.model';
import { AdminService } from '../../../shared/services/admin.service';

@Component({
  selector: 'app-admins',
  standalone: false,
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent {
 userList:User[]=[]
  constructor(private adminService:AdminService ){
   
  }
  ngOnInit(){
    
     this.adminService.getAllUsers().pipe(
      tap((res:any)=>{
       
      console.log("user comp : ",res);
      
     }
    ),map((res:any)=>res.users),map((users:User[])=>users.filter(user=>user.role==="admin"))
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
