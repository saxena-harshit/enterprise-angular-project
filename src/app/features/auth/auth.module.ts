import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { DynamicformComponent } from '../../shared/components/dynamicform/dynamicform.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,
    SharedModule

  ]
})
export class AuthModule { }
