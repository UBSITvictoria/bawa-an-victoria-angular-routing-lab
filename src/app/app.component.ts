import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, RouterLinkActive, FormsModule, CommonModule],
  providers: [],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'child-routes-example';
  Age = 20;
  pageTitle = 'Angular 19 Data Binding';
  curentTime = new Date();

  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpHFTOzzNSYgGm2evaQS6zBcjlGFrEFCpuQjHVYq9BdFKTU2NO8uN-n_QEcysNu19SFEHija7RD4TMlxaz5qfwXHsDA6l7vec25pebQ';
  isDisabled = true;
 
  
  clickCount = 0;
  incrementCount(){
      this.clickCount++;
  }

  onInput(event: Event){
    console.log((event.target as HTMLInputElement).value);
  }


  //Forms Module
  
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
  showModal() {
    const modalElement = document.getElementById('exampleModal');
    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();
  }
  
}
