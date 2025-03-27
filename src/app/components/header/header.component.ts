import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule,RouterLinkActive]
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
      } else if (path.includes('/products')) {
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
  }
}