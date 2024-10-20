
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { CarouselModule } from '@coreui/angular';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink,CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit  {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      title: 'Transform Fitness: Unleash Your Potential',
      subtitle: 'Join Transform Fitness, where our expert trainers and supportive community empower you to reach your health and fitness goals.'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://images.unsplash.com/photo-1561729955-89357c733059',
      title: 'Your Journey Starts Here',
      subtitle: ' At Elevate Wellness, we believe in holistic health. Our state-of-the-art facilities offer everything from strength training to yoga.'
    };
    this.slides[2] = {
      id: 2,
      src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd',
      title: 'Train Like a Champion',
      subtitle: 'Welcome to Peak Performance Gym, where champions are made! Our cutting-edge equipment and specialized training programs cater to all fitness levels.'
    };
  }
}
