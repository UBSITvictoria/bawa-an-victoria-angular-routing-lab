import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container my-5">
      <div class="jumbotron">
        <h1 class="display-4">Welcome to our Angular Website!</h1>
        <p class="lead">This is a fully functional Angular project with routing, components, and authentication system.</p>
        <hr class="my-4">
        <p>Explore the different sections of the website using the sidebar or navigation bar.</p>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Guest Area</h5>
              <p class="card-text">View all available products in our catalog.</p>
              <button class="btn btn-primary" routerLink="/guest">Go to Guest Area</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">User Area</h5>
              <p class="card-text">Add new products to our catalog (login required).</p>
              <button class="btn btn-success" routerLink="/users">Go to User Area</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Authentication</h5>
              <p class="card-text">Login or register to access all features.</p>
              <button class="btn btn-info" routerLink="/login">Login Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [RouterLink]
})
export class HomeComponent {}
