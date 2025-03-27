import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Smartphone X', description: 'Latest smartphone with amazing features', price: 799.99, imageUrl: 'https://rukminim3.flixcart.com/fk-p-flap/480/300/image/67caca5f852684a1.jpg?q=90', isAvailable: true, category: 'Electronics', rating: 4.5, quantity: 10 },
    { id: 2, name: 'Laptop Pro', description: 'Powerful laptop for professionals', price: 1299.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY7klmL6ZsM74nyBC8NAT78gwbRwtLvoKnw&s', isAvailable: true, category: 'Electronics', rating: 4.8, quantity: 5 },
    { id: 3, name: 'Wireless Headphones', description: 'Premium sound quality with noise cancellation', price: 249.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvCfxa_gZeJMNUo2TeUq2Ax1gzX0aUJAJPA&s', isAvailable: false, category: 'Audio', rating: 4.2, quantity: 0 },
    { id: 4, name: 'Smart Watch', description: 'Track your fitness and stay connected', price: 199.99, imageUrl: 'https://png.pngtree.com/png-clipart/20241230/original/pngtree-tech-at-a-glance-smartwatch-app-icons-in-action-png-image_18253130.png', isAvailable: true, category: 'Wearables', rating: 4.0, quantity: 15 },
    { id: 5, name: 'DSLR Camera', description: 'Professional camera for high-quality photos and videos', price: 1499.99, imageUrl: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2022/06/nikon-d780-photo-michael-topham-1000.jpg?w=900', isAvailable: true, category: 'Cameras', rating: 4.9, quantity: 3},
    { id: 6, name: 'Tablet Max', description: 'Lightweight tablet with a stunning display', price: 499.99, imageUrl: 'https://helios-i.mashable.com/imagery/articles/05Asoyb2EhjJqVA1J63WtNQ/hero-image.fill.size_1248x702.v1733484369.jpg', isAvailable: true, category: 'Electronics', rating: 4.3, quantity: 20},
    { id: 7, name: 'Gaming Console', description: 'Next-gen console with immersive gameplay', price: 599.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVvYebsqpAZQ525qZnnGYhkh0X6FVldb8EzCN0CLXDhQaQ0HMj7bxC2gjMvraq4niJGc&usqp=CAU', isAvailable: true, category: 'Gaming', rating: 4.7, quantity: 8},
    { id: 8, name: 'Bluetooth Speaker', description: 'Portable speaker with powerful bass', price: 99.99, imageUrl: 'https://musictech.com/wp-content/uploads/2021/04/Sonos-Move-Credit-Sonos@1400x1050.jpg', isAvailable: true,category: 'Audio', rating: 4.1, quantity: 50},
    { id: 9, name: '4K Smart TV', description: 'Ultra HD TV with streaming apps and smart features', price: 899.99, imageUrl: 'https://images.samsung.com/is/image/samsung/assets/latin_en/tvs/mo/2024-tvs-pcd-f01-kv-mo.jpg?$ORIGIN_JPG$', isAvailable: true, category: 'Electronics', rating: 4.6, quantity: 12 }
  
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Product): Observable<Product> {
    const newId = Math.max(...this.products.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId };
    this.products.push(newProduct);
    return of(newProduct);
  }

  updateProduct(product: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
      return of(this.products[index]);
    }
    return of(product);
  }

  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}