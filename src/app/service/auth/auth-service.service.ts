import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../../model/signup';
import { Observable } from 'rxjs';
import { Login } from '../../model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  protected signupURL = 'http://localhost:3000/api/v1/auth/signup'
  protected loginURL = 'http://localhost:3000/api/v1/auth/login'
  protected resetCodeURL = 'http://localhost:3000/api/v1/auth/resetCode'
  protected reset = 'http://localhost:3000/api/v1/auth/resetPassword'
  protected googleOAuthUrl = 'http://localhost:3000/google'

  constructor(private http: HttpClient, private router: Router) { }

  signup(newUser: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.signupURL, newUser)
  }

  login({ email, password }: Login): Observable<Login> {
    return this.http.post<Login>(this.loginURL, { email, password })
  } 

  sendVerificationCode(email?: string, code?: string): Observable<any> {
    return this.http.post(this.resetCodeURL, { email, code })
  }

  resetPassword(newPassword?: string, confirmPassword?: string, code?: string ): Observable<any> {
    return this.http.post(this.reset, { newPassword, confirmPassword, code})
  }

  googleOAuth(): void {
    window.location.href = this.googleOAuthUrl
  }

  handleOAuthCallback(params: any): void {
    const { token } = params
    if(token) {
      localStorage.setItem('authToken', token)
      this.router.navigate(['/signup'])
    }
  }
}