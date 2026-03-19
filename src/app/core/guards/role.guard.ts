import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);
  const authService= inject(AuthService);
  const currentUser=authService.getCurrentUser();

  const requiredRole=route.data?.['role'];
  
  console.log(requiredRole);
  if(currentUser?.role===requiredRole){
    
    return true;
  }
  

   router.navigate(['/dashboard']);
   return false;
};
