import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with amazing features',
      price: 799.99,
      imageUrl: 'https://via.placeholder.com/200x300',
      isAvailable: true,
      category: 'Electronics',
      rating: 4.5,
      quantity: 10
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'Powerful laptop for professionals',
      price: 1299.99,
      imageUrl: 'https://via.placeholder.com/200x300',
      isAvailable: true,
      category: 'Electronics',
      rating: 4.8,
      quantity: 5
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 249.99,
      imageUrl: 'https://via.placeholder.com/200x300',
      isAvailable: false,
      category: 'Audio',
      rating: 4.2,
      quantity: 0
    },
    {
      id: 4,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/200x300',
      isAvailable: true,
      category: 'Wearables',
      rating: 4.0,
      quantity: 15
    }
  ]);

  private products: Product[] = this.productsSubject.getValue();

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  addProduct(product: Product): Observable<Product> {
    const newId = this.products.length > 0 
      ? Math.max(...this.products.map(p => p.id)) + 1 
      : 1;
    const newProduct = { ...product, id: newId };
    this.products.push(newProduct);
    this.productsSubject.next(this.products);
    return of(newProduct);
  }

  updateProduct(product: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
      this.productsSubject.next(this.products);
      return of(this.products[index]);
    }
    return of(product);
  }

  deleteProduct(id: number): Observable<boolean> {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.id !== id);
    
    if (this.products.length < initialLength) {
      this.productsSubject.next(this.products);
      return of(true);
    }
    return of(false);
  }
}