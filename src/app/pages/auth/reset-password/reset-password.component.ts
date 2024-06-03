import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../../service/auth/auth-service.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterLink, SpinnerComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  submitEmail: FormGroup
  isLoading: boolean = false
  faAnglesLeft = faAnglesLeft

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router, private toastr: ToastrService) {
    this.submitEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  sendCode(): void {
    if(this.submitEmail.invalid) {
      return
    }

    this.isLoading = true

    const userEmail = this.submitEmail.get('email')?.value

    setTimeout(() => {
      this.isLoading = false
    }, 3000)

    this.authService.sendVerificationCode(userEmail).subscribe({
      next: () => {
        setTimeout(() => [
          this.toastr.success('Please wait!', 'Email sent successfully')
        ], 1000)
        setTimeout(() => {
          this.router.navigate(['./verify-code'])
        }, 6000)
      },
      error: () => {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
        setTimeout(() => {
          this.toastr.error('Invalid email', 'error')
        }, 2000)
      }
    }) 
  }
}