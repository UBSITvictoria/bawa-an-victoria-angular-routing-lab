import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" [routerLink]="['/']">{{ title }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/dashboard" [routerLinkActive]="'active'">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" [routerLinkActive]="'active'">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/add-product" [routerLinkActive]="'active'">Add Product</a>
            </li>
          </ul>
          <div class="ms-auto">
            <button class="btn btn-light" (click)="toggleTheme()">
              {{ isDarkTheme ? 'Light Mode' : 'Dark Mode' }}
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div 
      class="bg-light p-2 text-center" 
      [style.background-color]="isDarkTheme ? '#343a40' : '#f8f9fa'"
      [style.color]="isDarkTheme ? 'white' : 'black'"
    >
      Currently viewing: {{ currentPage }}
    </div>
  `
})
export class HeaderComponent implements OnInit {
  title = 'Product Management App';
  currentPage = 'Dashboard';
  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const path = event.urlAfterRedirects;
      if (path.includes('/dashboard')) {
        this.currentPage = 'Dashboard';
      } else if (path.includes('/products') && !path.includes('/add-product')) {
        this.currentPage = 'Products';
      } else if (path.includes('/add-product')) {
        this.currentPage = 'Add Product';
      } else if (path.includes('/edit-product')) {
        this.currentPage = 'Edit Product';
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    // In a real app, you might want to add class to body or use a service for theme
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}