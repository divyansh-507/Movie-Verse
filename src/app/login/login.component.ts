import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }


  // For Json server backend connection 
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res => {
      const user = res.find((a: any)=>{
        return (a.username === this.loginForm.value.username || a.email === this.loginForm.value.email) && a.password === this.loginForm.value.password
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['movies-home']);
      } else{
        alert("User Not Found, Please Register.");
      }
    },err=>{
      alert("Error : "+err);
    })
  }

}
