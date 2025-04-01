import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutsComponent],
  template: `
    <app-layouts>
      <router-outlet></router-outlet>
    </app-layouts>
  `
})
export class AppComponent {
  title = 'angular-website';
}