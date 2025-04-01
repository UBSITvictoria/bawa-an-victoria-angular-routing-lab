import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="users-container">
      <h2 class="mb-4">User Area</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class UsersComponent {}
