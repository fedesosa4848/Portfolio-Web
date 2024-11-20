import { Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarqueeComponent, TechStackComponent, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
