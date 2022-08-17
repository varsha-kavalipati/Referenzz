import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  user=new User();
  msg='';
  errorMessage!: string;  // store error message
  successMessage!: string;

  constructor(private fb:FormBuilder,private service:RegistrationService,private route:Router) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  loginUser(){
    /*this.service.loginUser(this.user).subscribe(
      data=>{
        this.service.currentUser=data;
        console.log("Received")
        // this.route.navigate(['/products'])
      },
      error=>{
        console.log("Exception")
        this.msg="Re check please"
      }
    )*/
    console.log("Received")
    console.log(this.loginform)
  }

  gotoregistration(){
    this.route.navigate(['/registration'])
  }
}
