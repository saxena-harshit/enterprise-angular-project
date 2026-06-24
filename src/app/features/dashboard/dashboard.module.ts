import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from "../../shared/shared.module";
import { AllUsersComponent } from './all-users/all-users.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { ModeratorsComponent } from './moderators/moderators.component';
import { FormsModule } from '@angular/forms';
import { A11yModule } from "@angular/cdk/a11y";


@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    AllUsersComponent,
    AdminsComponent,
    UsersComponent,
    ModeratorsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    A11yModule
]
})
export class DashboardModule { }
