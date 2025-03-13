import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { ParentComponent } from './parent/parent.component'; 
import { ChildOneComponent } from './parent/child-one/child-one.component'; 
import { ChildTwoComponent } from './parent/child-two/child-two.component'; 
import { RouterModule } from '@angular/router'; // Import RouterModule import { routes } from './app.routes'; // Import routes from app.routes.ts 
import { routes } from './app.routes';
@NgModule({ 
 declarations: [ 
 AppComponent, 
 ParentComponent, 
 ChildOneComponent, 
 ChildTwoComponent 
 ], 
 imports: [ 
 BrowserModule, 
 RouterModule.forRoot(routes) // Configure RouterModule using routes  
], 
 providers: [], 
 bootstrap: [AppComponent] 
}) 
export class AppModule { }
