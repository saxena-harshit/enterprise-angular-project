import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  }, {
    path:'signin',
    component:SignInComponent
  },
  {
    path:'dashboard',
   loadChildren: () =>
      import('./features/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate:[authGuard]
  },
  {
    path:'completeProfile',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => {
          console.log("loading user module");
          return import('./features/user/user.module').then(m => m.UserModule);
        }
      }
    ]
  },
  { path: 'dashboard1', loadChildren: () => import('./feature1/dashboard1/dashboard1.module').then(m => m.Dashboard1Module) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
