import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router:Router){}

  goToLogin(name:string, email:string, pass:string, page:string):void{
    this.router.navigate([`${page}`]);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', pass);

    const displaylogin = document.querySelector(".login-ex");

    if(displaylogin){
    displaylogin.classList.remove("display-unset");
    displaylogin.classList.add("display-visible");
    console.log("login diss")
    }



  }
  test(){
    console.log("hello");
  }
}
