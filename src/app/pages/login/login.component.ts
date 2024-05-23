import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../../service/auth/auth-service.service';
import { Login } from '../../model/login';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SpinnerComponent, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  isLoading: boolean = false
  loginImage = 'https://img.freepik.com/free-photo/stylish-black-man-city-with-shopping-bags_1157-33168.jpg?t=st=1716394003~exp=1716397603~hmac=4ee51ee81c105b068742e29acbeaec895a1365ad7d5391207dfcf37e16364ee1&w=900'

  constructor(
    private as: AuthServiceService, 
    private fb: FormBuilder, 
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if(params['token']) {
          this.as.handleOAuthCallback(params)
        }
      })
  }

  login(): void {
    if(this.loginForm.invalid) {
      return
    }

    this.isLoading = true

    const user: Login = this.loginForm.value

    setTimeout(() => {
      this.isLoading = false
    }, 3000)

    this.as.login(user).subscribe({
      next: () => {
        setTimeout(() => [
          this.toastr.success('Please wait!', 'Login successful')
        ], 1000)
        setTimeout(() => {
          this.router.navigate([''])
        }, 6000)
      },
      error: () => {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
        setTimeout(() => {
          this.toastr.error('Invalid email or password', 'error')
        }, 2000)
      }
    })
  }

  googleLogin(): void {
    this.as.googleOAuth()
  }
}