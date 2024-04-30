import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'DripLuxury Clothing - Signup',
        component: SignupComponent
    },
    {
        path: 'login',
        title: 'DripLuxury Clothing - Login',
        component: LoginComponent
    }, 
    {
        path: '',
        title: 'DripLuxury Clothing - Home',
        component: HomeComponent
    }
]