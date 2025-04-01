import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h4 class="mb-0">Register</h4>
            </div>
            <div class="card-body">
              <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="name" formControlName="name">
                  <div *ngIf="registerForm.get('name')?.invalid && registerForm.get('name')?.touched" class="text-danger">
                    Name is required
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" formControlName="email">
                  <div *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched" class="text-danger">
                    Please provide a valid email
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" formControlName="password">
                  <div *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched" class="text-danger">
                    Password must be at least 6 characters
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="confirmPassword" formControlName="confirmPassword">
                  <div *ngIf="registerForm.get('confirmPassword')?.invalid && registerForm.get('confirmPassword')?.touched" class="text-danger">
                    Passwords must match
                  </div>
                </div>
                
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="terms" formControlName="terms">
                  <label class="form-check-label" for="terms">I agree to the Terms of Service</label>
                  <div *ngIf="registerForm.get('terms')?.invalid && registerForm.get('terms')?.touched" class="text-danger">
                    You must agree to the terms
                  </div>
                </div>
                
                <button type="submit" class="btn btn-success" [disabled]="registerForm.invalid">Register</button>
              </form>
              
              <div *ngIf="successMessage" class="alert alert-success mt-3">
                {{ successMessage }}
              </div>
              
              <div class="mt-3">
                <p>Already have an account? <a routerLink="/login">Login here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
 
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string = '';
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  
  passwordMatchValidator(g: FormGroup) {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      g.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    
    return null;
  }
  
  onSubmit(): void {
    if (this.registerForm.valid) {
      // In a real app, you would register with a service/API
      console.log('Registration data:', this.registerForm.value);
      
      // Show success message
      this.successMessage = 'Registration successful! Redirecting to login...';
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
}