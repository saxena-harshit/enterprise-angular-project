import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { RefreshTokenService } from '../services/refresh-token.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {


  const router = inject(Router);
  const authService= inject(AuthService);
  const refreshTokenService= inject(RefreshTokenService)

  return next(req).pipe(
    catchError((err)=>{
      debugger
      if(err.status===401){
        const isContinue=confirm("do you want to continue the session ?");
        if(isContinue){
          refreshTokenService.tokenExpired$.next(true);
        }else{
        authService.logOut();

        }
      }
      if(err.status===403){
        alert("access denied");
      }
      if(err.status===500){
        alert("server error accured");
      }
      if(err.status===400){
        alert("wrong data")
      }
      return throwError(()=>err);
    })
  )
};
