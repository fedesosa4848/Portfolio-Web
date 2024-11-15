import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-web';

   // Método para desplazar hacia la sección
   scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      // Desplazarse suavemente a la sección
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
