import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebAPIWrapperService } from '../Services/web-apiwrapper.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthResponseModel } from '../Models/app.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  _wrapper: WebAPIWrapperService = new WebAPIWrapperService(this.objHTTPClient);

  constructor(public objHTTPClient :HttpClient) {}
  
  loginForm =new FormGroup(
    {
      userName : new FormControl(''),
      pwd : new FormControl(''),
      role : new FormControl('')
    }
  );


  Login()
  {
    var user = {
      userName: this.loginForm.controls['userName'].value,
      role: this.loginForm.controls['role'].value,
      email: "ara@test.com",
      phone: "1234567890",
      password: this.loginForm.controls['pwd'].value
    };
    
    const userStr = JSON.stringify(user);

    this._wrapper.Login(userStr).then((objResponse) => this.StoreAuth(objResponse));
  }

  private StoreAuth(pobjUserAuthRes: UserAuthResponseModel)
  {
    localStorage.setItem("AuthKey", pobjUserAuthRes.token);
  }

  Set()
  {
    this.loginForm.setValue(
      {
        userName: "Arasan",
        role: "Administrator",
        pwd: "test1234"
      }
    )
  }

}

