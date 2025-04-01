import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container">
      <h3 class="mb-4">Add New Product</h3>
      <div class="alert alert-info">
        <strong>Note:</strong> You must be logged in to add products. This is a demo form.
      </div>
      
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()" class="mt-4">
        <div class="mb-3">
          <label for="name" class="form-label">Product Name</label>
          <input type="text" class="form-control" id="name" formControlName="name">
          <div *ngIf="productForm.get('name')?.invalid && productForm.get('name')?.touched" class="text-danger">
            Name is required
          </div>
        </div>
        
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="number" class="form-control" id="price" formControlName="price" step="0.01">
          </div>
          <div *ngIf="productForm.get('price')?.invalid && productForm.get('price')?.touched" class="text-danger">
            Valid price is required
          </div>
        </div>
        
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" rows="3" formControlName="description"></textarea>
          <div *ngIf="productForm.get('description')?.invalid && productForm.get('description')?.touched" class="text-danger">
            Description is required
          </div>
        </div>
        
        <div class="mb-3">
          <label for="imageUrl" class="form-label">Image URL</label>
          <input type="text" class="form-control" id="imageUrl" formControlName="imageUrl">
          <div *ngIf="productForm.get('imageUrl')?.invalid && productForm.get('imageUrl')?.touched" class="text-danger">
            Image URL is required
          </div>
        </div>
        
        <button type="submit" class="btn btn-success" [disabled]="productForm.invalid">Add Product</button>
      </form>
      
      <div *ngIf="successMessage" class="alert alert-success mt-3">
        {{ successMessage }}
      </div>
    </div>
  `
})
export class AddProductsComponent {
  productForm: FormGroup;
  successMessage: string = '';
  
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    if (this.productForm.valid) {
      // In a real app, you would send this data to a service/API
      console.log('Product submitted:', this.productForm.value);
      this.successMessage = 'Product added successfully!';
      
      // Reset the form
      this.productForm.reset();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }
  }
}