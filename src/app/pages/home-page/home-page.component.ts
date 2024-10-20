import { Component } from '@angular/core';
import { SliderComponent } from '../../components/home/slider/slider.component';
 
import { PricingPlansComponent } from '../../components/home/pricing-plans/pricing-plans.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SliderComponent,PricingPlansComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
