import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  check(loginname:string, loginemail:string, loginpassword:string){
    var reg_name=localStorage.getItem('name');
    var reg_email=localStorage.getItem('email');
    var reg_password=localStorage.getItem('password');
    
    if(loginname==reg_name && loginemail==reg_email && loginpassword==reg_password){
      alert("you have succesfully login");
    }
    else{
      alert("invalid credentials");
    }
  }
}
