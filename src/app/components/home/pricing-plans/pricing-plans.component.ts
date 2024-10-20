import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [],
  templateUrl: './pricing-plans.component.html',
  styleUrl: './pricing-plans.component.css'
})
export class PricingPlansComponent {
  items = [
    {
      img:'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114193.jpg'
    },
    {
      img:'https://www.anytimefitness.co.in/wp-content/uploads/2023/02/Gym-Regimen-1024x683.jpg'
    },
    {
      img:'https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?fit=2560%2C1707&ssl=1'
    }
  ]
}
