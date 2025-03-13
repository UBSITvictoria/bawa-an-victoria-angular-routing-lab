import { Injectable } from '@angular/core'; 
@Injectable({ 
 providedIn: 'root' 
}) 
export class AuthService { 
 isAdmin(): boolean { 
 // In a real app, you would check user roles here. 
 // For this example, let's always return false to demonstrate guard  blocking. 
 console.log('AuthService.isAdmin() called - always returning false for  demo'); 
 return true; // Simulate not being an admin for demonstration  }  
}
}