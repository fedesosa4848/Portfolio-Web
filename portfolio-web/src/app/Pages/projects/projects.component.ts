import { Component } from '@angular/core';
import { CarouselComponent } from "../../Components/proyect/carousel/carousel.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
