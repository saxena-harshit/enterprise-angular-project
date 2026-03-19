import { Component } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  constructor(private adminService: AdminService) {}
  userList: User[] = [];

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
