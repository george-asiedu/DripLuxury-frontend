import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../../service/auth/auth-service.service';
import { Login } from '../../model/login';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, SpinnerComponent, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  isLoading: boolean = false

  constructor(private as: AuthServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
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
        this.toastr.success('Please wait!', 'Login successful')
        setTimeout(() => {
          this.router.navigate([''])
        }, 4000)
      },
      error: () => {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
        this.toastr.error('Invalid email or password', 'error')
      }
    })
  }
}