import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  ngOnInit(): void {}

  static signedUpUsers : any =[
    {username : "admin", email : "admin@gmail.com", mobile : "1234", password : "admin"},
    {username : "divyanshb", email : "divyanshb507@gmail.com", mobile : "98746532", password : "divyansh@123"},
  ];

  static signedUpObj = {
    username : '',
    email : '',
    mobile : '',
    password : ''
  }
}
