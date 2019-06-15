import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class WebAPIWrapperService 
{
  strAuthTocken :string;
  constructor(public _objHttpClient: HttpClient) { }

  private strURL: string = "https://localhost:5001/student/login";

  private _login(pstrJson: string) :Observable<string>
  {
    return this._objHttpClient.post<string>(this.strURL, pstrJson);
  }
  
  public Login(pstrJson: string)
  {
    return this._login(pstrJson).subscribe((strAuthTockenRes :string)=>this.strAuthTocken = strAuthTockenRes)
  }

}
