import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';


import { AppComponent } from './app.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { AddProfileComponent } from './users/add-profile/add-profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'users', 
    component: UsersComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit-progfile/:id', component: EditProfileComponent }, // Edit Profile
      { path: 'profile/add', component: AddProfileComponent } // Add Profile

    ]
    
  },

  


  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
  providers: [AdminGuard],
  
})
export class AppRoutingModule { }