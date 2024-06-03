import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { VerificationComponent } from './pages/auth/verification/verification.component';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
import { SalesComponent } from './pages/category/men/sales/sales.component';
import { WomenClothingComponent } from './pages/category/women/women-clothing/women-clothing.component';
import { KidsClothingComponent } from './pages/category/kids/kids-clothing/kids-clothing.component';

export const routes: Routes = [
    {
        path: '',
        title: 'DripLuxury Clothing - Home',
        component: HomeComponent
    },
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
        path: 'men-category',
        title: 'DripLuxury Clothing | Men Home',
        component: SalesComponent
    },
    {
        path: 'women-category',
        title: 'DripLuxury Clothing | Women Home',
        component: WomenClothingComponent
    },
    {
        path: 'kids',
        title: 'DripLuxury Clothing | Kids Home',
        component: KidsClothingComponent
    }
]