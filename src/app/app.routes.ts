import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'DripLuxury Clothing | Signup',
        component: SignupComponent
    },
    {
        path: 'login',
        title: 'DripLuxury Clothing | Login',
        component: LoginComponent
    },
    {
        path: 'reset-password',
        title: 'DripLuxury Clothing | Reset Password',
        component: ResetPasswordComponent
    } ,
    {
        path: 'verify-code',
        title: 'DripLuxury Clothing | Verify Code',
        component: VerificationComponent
    },
    {
        path: 'change-password',
        title: 'DripLuxury Clothing | Change Password',
        component: ChangePasswordComponent
    },
    {
        path: '',
        title: 'DripLuxury Clothing - Home',
        component: HomeComponent
    }
]