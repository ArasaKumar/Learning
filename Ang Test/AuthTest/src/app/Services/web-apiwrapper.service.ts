import { Injectable } from "@angular/core";
import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserAuthResponseModel } from '../Models/app.Model';

@Injectable({
  providedIn: "root"
})
export class WebAPIWrapperService 
{
  strAuthTocken :string;
  constructor(public _objHttpClient: HttpClient) { }

  private strURL: string = "https://localhost:5001/student/login";
  
  public  Login(pstrJson: string)
  {
    return this._objHttpClient.post<UserAuthResponseModel>(this.strURL, pstrJson).toPromise().then(res => { return res; });
  }

}
