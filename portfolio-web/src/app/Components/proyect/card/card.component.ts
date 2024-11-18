import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Arreglo de proyectos con algún ejemplo de datos
  projects = [
    { title: 'Proyecto 1', description: 'Descripción del proyecto 1' , background: 'https://ipaginaweb.com/wp-content/uploads/angular-1.jpg'},
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    { title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
    { title: 'Proyecto 4', description: 'Descripción del proyecto 4' },
    { title: 'Proyecto 5', description: 'Descripción del proyecto 5' },
    { title: 'Proyecto 6', description: 'Descripción del proyecto 6' },
    { title: 'Proyecto 7', description: 'Descripción del proyecto 7' },
    { title: 'Proyecto 8', description: 'Descripción del proyecto 8' },
    { title: 'Proyecto 9', description: 'Descripción del proyecto 9' },
    { title: 'Proyecto 10', description: 'Descripción del proyecto 10' },
    { title: 'Proyecto 11', description: 'Descripción del proyecto 11' }
  ];

  currentIndex: number = 0;

  changeProject(direction: string): void {
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    }
  }
}
