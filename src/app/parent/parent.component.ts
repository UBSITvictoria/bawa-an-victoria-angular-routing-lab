import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name ='';
  email = '';
  phone_no= '';
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
