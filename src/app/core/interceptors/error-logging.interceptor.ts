import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, timestamp } from 'rxjs';
import { ErrorLoggingService } from '../services/ErrorService/error-logging.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RefreshTokenService } from '../services/refresh-token.service';

export const errorLoggingInterceptor: HttpInterceptorFn = (req, next) => {
  
  console.log("interceptor hit");
  const logging= inject(ErrorLoggingService);
  
    const router = inject(Router);
  const authService= inject(AuthService);
  const refreshTokenService= inject(RefreshTokenService)

  return next(req).pipe(catchError(err=>{

logging.logError({
  type: 'HTTP ERROR',
  message: err.error?.message || err.message,
  status: err.status,
  apiUrl: req.url,
  method: req.method,
  timestamp: new Date().toISOString()
});
  if(err.status===401){
        const isContinue=confirm("do you want to continue the session ?");
        if(isContinue){
          RefreshTokenService.tokenExpired$.next(true);
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
  
    console.log("API ERROR");
    
    console.log(err);
    return throwError(()=>err);
  }));
};
