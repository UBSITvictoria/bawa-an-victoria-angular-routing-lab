import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';

const routes: Routes = [
  {  
    path: 'parent', // Parent route
    component: ParentComponent,
    children: [ 
      {  
        path: 'child-one', 
        component: ChildOneComponent 
      }, 
      {  
        path: 'child-two', 
        component: ChildTwoComponent 
      }, 
      {  
        path: '', // Default child route when accessing '/parent'
        redirectTo: 'child-one', 
        pathMatch: 'full' 
      }  
    ]  
  },
  {  
    path: '', 
    redirectTo: '/parent', // Default route redirects to 'parent'
    pathMatch: 'full' 
  }  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
