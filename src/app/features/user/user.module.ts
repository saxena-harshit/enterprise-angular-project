import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    CompleteProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
]
})
export class UserModule { }
