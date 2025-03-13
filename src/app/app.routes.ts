import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { AdminGuard } from './admin.guard'; // Import AdminGuard
import { NgModule } from '@angular/core';

export const routes: Routes = [
{ path: 'parent', component: ParentComponent, children: [
    { path: 'child-one', component: ChildOneComponent },
    { path: 'child-two', component: ChildTwoComponent},
    { path: '', redirectTo: 'child-one', pathMatch: 'full'}]},
{ path: '', redirectTo: '/parent', pathMatch: 'full'},
{ path: 'admin', component: ParentComponent, canActivate:       [AdminGuard], children: [
    { path: 'dashboard', component: ChildOneComponent},
    { path: 'users', component: ChildTwoComponent}]},
{ path: '', redirectTo: '/parent', pathMatch: 'full'}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]})
export class AppRoutingModule { };