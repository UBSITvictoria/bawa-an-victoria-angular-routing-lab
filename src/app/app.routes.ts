import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewProductsComponent } from './components/guest/view-products/view-products.component';
import { AddProductsComponent } from './components/users/add-products/add-products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GuestComponent } from './components/guest/guest.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'guest', 
    component: GuestComponent,
    children: [
      { path: 'view-products', component: ViewProductsComponent },
      { path: '', redirectTo: 'view-products', pathMatch: 'full' }
    ] 
  },
  { 
    path: 'users', 
    component: UsersComponent,
    children: [
      { path: 'add-products', component: AddProductsComponent },
      { path: '', redirectTo: 'add-products', pathMatch: 'full' }
    ] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];