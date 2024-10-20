import { Component } from '@angular/core'; 
import { MatRippleModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,RouterLink,MatRippleModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
