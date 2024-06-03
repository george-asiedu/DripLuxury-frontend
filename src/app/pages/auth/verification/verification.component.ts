import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../../../service/auth/auth-service.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SpinnerComponent],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  verifyForm: FormGroup
  isLoading: boolean = false

  constructor(private authService: AuthServiceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.verifyForm = this.fb.group({
      code: ['', Validators.required]
    })
  }

  verify(): void {
    if(this.verifyForm.invalid) {
      return
    }

    this.isLoading = true

    const code = this.verifyForm.get('code')?.value

    setTimeout(() => {
      this.isLoading = false
    }, 3000)

    this.authService.resetPassword(code).subscribe({
      next: () => {
        setTimeout(() => [
          this.toastr.success('Please wait!', 'Code Verified successfully')
        ], 1000)
        setTimeout(() => {
          this.router.navigate(['./change-password'])
        }, 6000)
      },
      error: () => {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
        setTimeout(() => {
          this.toastr.error('Invalid code', 'error')
        }, 2000)
      }
    })
  }
}