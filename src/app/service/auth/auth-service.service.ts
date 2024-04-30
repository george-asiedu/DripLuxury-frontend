import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../../model/signup';
import { Observable } from 'rxjs';
import { Login } from '../../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  protected loginURL = 'http://localhost:3000/api/v1/auth/login'
  protected signupURL = 'http://localhost:3000/api/v1/auth/signup'

  constructor(private http: HttpClient) { }

  signup(newUser: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.signupURL, newUser)
  }

  login({ email, password }: Login): Observable<Login> {
    return this.http.post<Login>(this.loginURL, { email, password })
  } 
}
