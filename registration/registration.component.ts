import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerform!:FormGroup;
  user= new User();
  msg = '';
  constructor(private fb:FormBuilder,private service:RegistrationService,private route:Router) {
    this.registerform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      confirm_password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  registerUser(){
   /* this.service.registerUser(this.user).subscribe(
      data=>{
        console.log("Registered")
         this.route.navigate(['/login'])
      },
      error=>{
        console.log(error.message)
        console.log("Exception")
        this.msg=error.message;
      }
    )*/
    // if(this.registerform.controls['password']===this.registerform.controls['confirm_password']){
    const val=this.registerform.value;
    if(val.password===val.confirm_password){
      console.log("Registered")
    this.route.navigate(['/login'])
    console.log(this.registerform)
    }
    else{
      const para = document.createElement("p");
para.innerText = "Check your password";
document.body.appendChild(para);
    }
    
    // }
  }

  gotologin(){
    this.route.navigate(['/login'])
  }
}
