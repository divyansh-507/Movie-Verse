import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      mobile:['']
    })

    UsersComponent.signedUpObj.username = this.signupForm.value.username;
    UsersComponent.signedUpObj.email = this.signupForm.value.email;
    UsersComponent.signedUpObj.mobile = this.signupForm.value.mobile;
    UsersComponent.signedUpObj.password = this.signupForm.value.password;
  }

  // Done for Json Server connection
  signUp(){
    // alert(this.signupForm.value);
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("SignUp Successful !!"); 
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Error : "+err);
    })
  }

}
