import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { MaterialModule } from './material/material.module';
import { AllUserListComponent } from './components/all-user-list/all-user-list.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    LoaderComponent,
    DynamicformComponent,
    DynamicTableComponent,
    AllUserListComponent,
    AdminListComponent,
    UserListComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,MaterialModule
  ],exports:[
    LoaderComponent,
    DynamicformComponent,
    MaterialModule,DynamicTableComponent
  ]
})
export class SharedModule { }
