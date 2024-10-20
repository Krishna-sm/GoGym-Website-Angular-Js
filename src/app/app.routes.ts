import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent,
        title:'Home Page'
    },
    {
        path:'about',
        component:AboutPageComponent,
        title:'About Page'
    },
    {
        path:'contact',
        component:ContactPageComponent,
        title:'Contact Page'
    },
    {
        path:'pricing',
        component:PricingPageComponent,
        title:'Pricing Page'
    },
    {
        path:'**',
        component:ErrorPageComponent,
        title:'404 Not Found'
    },
];
