import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="guest-container">
      <h2 class="mb-4">Guest Area</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class GuestComponent {}
