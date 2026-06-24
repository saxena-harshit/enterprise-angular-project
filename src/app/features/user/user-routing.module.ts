import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { LayoutComponent } from '../../layout/layout/layout.component';

const routes: Routes = [
  {
    
      
          path:'',
        component:LayoutComponent,
        children:[{
          path:'',
          component:CompleteProfileComponent
        },
    
        ]
      
      
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
