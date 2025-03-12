import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  imports: [RouterModule]
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  profile: any = {};
  userId: string = '';

  constructor(private route: ActivatedRoute) {
      this.userId = this.route.snapshot.paramMap.get('id') || '';
    const id = this.route.snapshot.params['id'];
    // Fetch user data by id (mock data here)
    this.profile = { id, name: 'John Doe', bio: 'A sample user' };
  }

  onSubmit() {
    console.log('Profile updated:', this.profile);
  }
}