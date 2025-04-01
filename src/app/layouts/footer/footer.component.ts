import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white text-center p-3">
      <p class="mb-0">© 2025 Angular Website. All rights reserved.</p>
    </footer>
  `
})
export class FooterComponent {}