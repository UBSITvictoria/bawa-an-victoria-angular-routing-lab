import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
export class UserProfileComponent {
  userId = '123';
  profiles = [
    { id: 1, name: 'John Doe', bio: 'A sample user' },
    // Add more profiles here
    
  ];
}

