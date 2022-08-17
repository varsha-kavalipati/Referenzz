import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  currentUser : any
  constructor(private http: HttpClient) { }

  public loginUser(user:User):Observable<any>{
    const userD={
      user_id:user.emailId,
      password:user.password
    }
    return this.http.post<any>("http://localhost:5000/user/login",userD);
  }

  public registerUser(user:User):Observable<any>{
    const userD={
      user_id:user.emailId,
      name:user.userName,
      password:user.password,
      account_type:"Buyer"
    }
    return this.http.post<any>("http://localhost:5000/user/registeruser",userD);
  }
}
