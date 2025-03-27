import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductDetailComponent } from './app/components/product-detail/product-detail.component';
import { ProductFormComponent } from './app/components/product-form/product-form.component';

const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' as 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'edit-product/:id', component: ProductFormComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));