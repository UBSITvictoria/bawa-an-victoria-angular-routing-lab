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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: []
})
export class AppModule { }
