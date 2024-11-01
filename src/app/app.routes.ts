import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ContactinfoComponent } from './pages/contactinfo/contactinfo.component';
import { SignupComponent } from './form/signup/signup.component';
export const routes: Routes = [
  {
    path:'',
    component:NavComponent,
  },
  {
    path:'contact',
    component:ContactinfoComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
];
