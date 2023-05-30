import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  display_data(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(name){
      name.innerText="Name: "+localStorage.getItem("name");
    }
    if(email){
      email.innerText="Email: "+localStorage.getItem("email");
    }
    if(password){
      password.innerText="Password: "+localStorage.getItem("password");
    }
    

  }
}
