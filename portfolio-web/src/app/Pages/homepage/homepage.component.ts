import { Component } from '@angular/core';
import { HomeComponent } from "../../Components/home/home.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
