import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

// login/signup using arrays of objects
export class UserLoginComponent implements OnInit {
  signupUsers : any[] = [];
  signupObj : any = {
    username : "",
    email : "",
    password : ""
  };

  loginObj : any = {
    username : "",
    password : ""
  };

  constructor(private router: Router){}
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');

    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: "",
      email: "",
      password : ""
    };
  } 
  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('user Login Successfully!');
      this.router.navigate(['movies-home']);
    }
    else{
      alert('No user exist ... Please Register!!!');
    }
  }
}
