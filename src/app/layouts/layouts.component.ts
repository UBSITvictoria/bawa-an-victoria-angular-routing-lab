import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, CommonModule],
  template: `
    <div class="container-fluid p-0">
      <app-header></app-header>
      <div class="d-flex">
        <app-sidebar></app-sidebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <ng-content></ng-content>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class LayoutsComponent {}