import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthHandlerService implements HttpInterceptor
 {
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> 
  {
    let modreq = req.clone(
      {
        setHeaders: 
        {
          Authorization: 'zzzzz.xxxxxx.ccccccc'
        }
      }
    )
    return next.handle(modreq);
  }

  constructor() { }
  
}
