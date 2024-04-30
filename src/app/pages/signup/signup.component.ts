import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth/auth-service.service';
import { Signup } from '../../model/signup';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, SpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup
  error: string = ''
  isLoading: boolean = false

  constructor(private as: AuthServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator })
  }

 signup() {
  if(this.signupForm.invalid) {
    return 
  }

  this.isLoading = true

  const newUser: Signup = {
    firstName: this.signupForm.value.firstName,
    lastName: this.signupForm.value.lastName,
    email: this.signupForm.value.email,
    password: this.signupForm.value.password,
    confirmPassword: this.signupForm.value.confirmPassword
  }

  setTimeout(() => {
    this.isLoading = false
  }, 3000)

  this.as.signup(newUser as Signup).subscribe({
    next: () => {
      this.toastr.success('Please wait!', 'Account created successfully')
      setTimeout(() => {
        this.router.navigate(['./login'])
      }, 4000)      
    },
    error: (err) => {
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
      this.toastr.error(err.error.message || 'Signup failed', 'Sorry')
    }
  })
 }

 
passwordsMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    formGroup.get('confirmPassword')?.setErrors({ passwordsMatch: true })
  } else {
    formGroup.get('confirmPassword')?.setErrors(null)
  }
}

}