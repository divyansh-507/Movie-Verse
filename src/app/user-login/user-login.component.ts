import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

// login/signup using arrays of objects
export class UserLoginComponent implements OnInit {
  // array of signed up users who are registered 
  signupUsers : any[] = [
    {username : "admin", email : "admin@gmail.com", password : "admin"}
  ];

  // ṣign up object
  signupObj : any = {
    username : "",
    email : "",
    password : ""
  };

  //  login object 
  loginObj : any = {
    username : "",
    password : ""
  };

  constructor(private router: Router){}
  ngOnInit(): void {
    // adding the signup Object, (entered by user in register page) in the local storage
    const localData = localStorage.getItem('signupUsers');

    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    // adding the user to the list
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: "",
      email: "",
      password : ""
    };
    alert("user Registered Successfully");
  } 
  onLogin(){
    //checking user exists in the signupUsers list or not
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      // alert('user Login Successfully!');
      this.router.navigate(['movies-home']);
    }
    else{
      alert('No user exist ... Please Register!!!');
    }
  }
}
