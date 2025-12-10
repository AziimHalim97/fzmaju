import { Routes } from '@angular/router';
import { Home } from '../app/pages/home/home';
import { AboutUs } from '../app/pages/about-us/about-us';
import { Career } from '../app/pages/career/career';
import { ContactUs } from '../app/pages/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'career', component: Career },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: '' } // fallback
];
