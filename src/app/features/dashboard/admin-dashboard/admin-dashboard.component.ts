import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { User } from '../../../models/user.model';
import { UsersComponent } from '../users/users.component';
import { AdminsComponent } from '../admins/admins.component';
import { AllUsersComponent } from '../all-users/all-users.component';
import { ModeratorsComponent } from '../moderators/moderators.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent  implements AfterViewInit{
  constructor(private adminService: AdminService,  private  cdr:ChangeDetectorRef){}

  userList: User[] = [];

  options:any[]=["USER","ADMIN","MODERATOR","ALL USER"]
  selectedValue='';
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef;

ngOnInit(){
  this.loadComponent();
}
  ngAfterViewInit() {
    console.log('AfterViewInit triggered');
  }


   loadComponent() {
    if (!this.container) return;

    this.container.clear();

    if (this.selectedValue === "USER") {
      this.container.createComponent(UsersComponent);
    } else if (this.selectedValue === "ADMIN") {
      this.container.createComponent(AdminsComponent);
    } else if (this.selectedValue === "ALL USER") {
      this.container.createComponent(AllUsersComponent);
    }else if (this.selectedValue === "MODERATOR") {
      this.container.createComponent(ModeratorsComponent);
    }else{
            this.container.createComponent(AllUsersComponent);

    }

    this.cdr.detectChanges();
  }
}
