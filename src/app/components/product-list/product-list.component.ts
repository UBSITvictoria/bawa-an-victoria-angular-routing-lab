import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [routes, FormsModule, CommonModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  filterCategory = '';
  sortOption = 'name';
  categories: string[] = [];

  constructor(private productService: ProductService, public router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.categories = [...new Set(products.map(p => p.category))];
      this.filterProducts();
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products
      .filter(product => 
        (!this.filterCategory || product.category === this.filterCategory) &&
        (!this.searchTerm || product.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
      .sort((a, b) => this.sortByOption(a, b));
  }

  sortByOption(a: Product, b: Product): number {
    if (this.sortOption === 'price') return a.price - b.price;
    if (this.sortOption === 'rating') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filterCategory = '';
    this.sortOption = 'name';
    this.filterProducts();
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }

  editProduct(id: number): void {
    this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(success => {
      if (success) {
        this.loadProducts();
        alert('Product deleted successfully.');
      }
    });
  }
}