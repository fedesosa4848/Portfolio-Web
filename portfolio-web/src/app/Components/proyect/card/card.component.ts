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
    { title: 'Nutrit-Track', description: 'Una aplicación nutricional que ayuda a los usuarios a llevar un control detallado de sus comidas diarias y su ingesta calórica.', background: 'captura-nutrit.png' },
    { title: 'CarOnPoint', description: 'Un sistema de venta de autos usados que permite a los usuarios interactuar mediante un chat para facilitar la compra y venta de vehículos.', background: 'captura-caronp.png' },
    { title: 'Nutrit-Track Backend', description: 'La versión mejorada de Nutrit-Track, con un backend real desarrollado en Node.js y Express para gestionar datos y usuarios.', background: 'captura-nutri2.png' },
    { title: 'Biblioteca de Gestión de Libros', description: 'Un sistema de gestión para bibliotecas, que permite el control de préstamos y la administración de los libros disponibles.', background: 'cap-biblio-java.png' },
    { title: 'Biblioteca C', description: 'Un sistema similar al anterior, pero desarrollado en C con estructuras dinámicas para el manejo de los libros y los usuarios.', background: 'cap-biblio-c.png' },
    { title: 'Proyectos Académicos en C', description: 'Proyectos académicos realizados en C, abarcando diversos algoritmos y estructuras de datos en este lenguaje.', background: 'proyectsC.png' },
    { title: 'Proyectos Académicos en JavaScript', description: 'Implementación de proyectos académicos utilizando JavaScript, aplicando conocimientos en programación web y lógica.', background: 'proyectsJavascript.png' },
    { title: 'Proyectos Académicos en Java', description: 'Proyectos desarrollados en Java, donde se abordan diferentes estructuras de datos y técnicas de programación orientada a objetos.', background: 'proyectsJava.png' },
    { title: 'Proyectos en Angular', description: 'Desarrollo de proyectos utilizando Angular, enfocándose en la creación de aplicaciones web dinámicas y escalables.', background: 'proyectsAngular.png' },
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
