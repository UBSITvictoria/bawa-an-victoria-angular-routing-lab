import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="min-height: calc(100vh - 112px);">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/guest/view-products" routerLinkActive="active">
              View Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/users/add-products" routerLinkActive="active">
              Add Products
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class SidebarComponent {}