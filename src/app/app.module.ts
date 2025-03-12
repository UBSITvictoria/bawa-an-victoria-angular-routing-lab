import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { AddProfileComponent } from './users/add-profile/add-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  ,
  
  providers: []
})
export class AppModule { }
