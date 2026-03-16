import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
  
    DashboardRoutingModule,
    
      ]
})
export class DashboardModule { }
