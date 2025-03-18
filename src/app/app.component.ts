import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Required for standalone components
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-child-routes-example';
  name = '';
  email = '';
  phone_no = '';
  address = '';
  ssn = '';

  saveData() {
    console.log('Saved Data:', {
      name: this.name,
      email: this.email,
      phone_no: this.phone_no,
      address: this.address,
      ssn: this.ssn
    });
    alert('Data saved successfully!');
  }
}
