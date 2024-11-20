import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AsideComponent } from "./Components/aside/aside.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AsideComponent],
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
