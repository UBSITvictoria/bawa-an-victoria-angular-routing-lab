import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule,RouterModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './product-form.component.html' ,
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      isAvailable: [true],
      imageUrl: ['https://via.placeholder.com/200x300'],
      rating: [0, [Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.productId = +id;
        this.productService.getProduct(this.productId).subscribe(product => {
          if (product) {
            this.productForm.patchValue(product);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData: Product = {
        ...this.productForm.value,
        id: this.productId || 0  // 0 will be replaced in service
      };

      if (this.isEditMode) {
        this.productService.updateProduct(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.productService.addProduct(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}