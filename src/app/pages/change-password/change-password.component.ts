import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../service/auth/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePassword } from '../../model/change-password';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SpinnerComponent, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup 
  isLoading: boolean = false

  constructor(private authService: AuthServiceService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  newPassword(): void {
    if(this.changePasswordForm.invalid) {
      return
    }

    this.isLoading = true

    const newPassword: ChangePassword = this.changePasswordForm.value

    setTimeout(() => {
      this.isLoading = false
    }, 3000)

    
  }
}
