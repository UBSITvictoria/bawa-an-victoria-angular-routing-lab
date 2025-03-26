import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-dark text-white text-center py-3">
      <div class="container">
        <p class="mb-0">
          © {{ currentYear }} Product Management App. All rights reserved.
        </p>
        <small>Created with ❤️ using Angular</small>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}