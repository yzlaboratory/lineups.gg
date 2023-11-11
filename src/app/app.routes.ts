import { Routes } from '@angular/router';
import { UtilityComponent } from './utility/utility.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';

export const routes: Routes = [
  { path: 'utility-component', component: UtilityComponent },
  { path: '', redirectTo: '/utility-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: FourohfourComponent }, // Wildcard route for a 404 page
];
