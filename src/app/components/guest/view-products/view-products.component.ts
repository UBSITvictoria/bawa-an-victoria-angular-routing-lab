import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-products.component.html',
})
export class ViewProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    // Mock product data (in a real app, this would come from a service)
    this.products = [
      {
        id: 1,
        name: 'Smartphone',
        price: 699.99,
        description: 'Latest model with advanced camera and long battery life.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc8Yz4Na7nNo4b_Vx4dSu1AT4joEDFsKODQ&s'
      },
      {
        id: 2,
        name: 'Laptop',
        price: 1299.99,
        description: 'Powerful laptop for professionals with high performance.',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/FUi2wwNdyFSwShZZ7LaqWf.jpg'
      },
      {
        id: 3,
        name: 'Headphones',
        price: 149.99,
        description: 'Wireless headphones with noise cancellation technology.',
        imageUrl: 'https://www.pcworld.com/wp-content/uploads/2025/01/Wireless-gaming-headset_edited.jpg?quality=50&strip=all&w=1024'
      },
      {
        id: 4,
        name: 'Smartwatch',
        price: 249.99,
        description: 'Track your fitness and stay connected on the go.',
        imageUrl: 'https://m.media-amazon.com/images/I/81SQlnxKowL._AC_UF350,350_QL80_.jpg'
      },
      {
        id: 5,
        name: 'Tablet',
        price: 499.99,
        description: 'Portable tablet perfect for entertainment and work.',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/U3EyY9qnvZXvL3Sg8dGF7T-1200-80.jpg'
      },
      {
        id: 6,
        name: 'Speaker',
        price: 89.99,
        description: 'Bluetooth speaker with crystal clear sound quality.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFB-_SFKSTZ350OPJdw5ykm7KGe4saKi3K-CbfwEdS6mZvJgM5y2vzobQkUpEtLlSXwu0&usqp=CAU'
      }
    ];
  }

  viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    // Open Bootstrap modal (using DOM API since we're not importing the Bootstrap JS module)
    const modal = document.getElementById('productModal');
    if (modal) {
      // @ts-ignore: Using Bootstrap's modal method
      new bootstrap.Modal(modal).show();
    }
  }
}