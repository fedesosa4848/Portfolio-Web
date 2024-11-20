import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  // Arreglo de proyectos con algún ejemplo de datos
  projects = [
    { 
      title: 'Nutrit-Track', 
      description: 'Una aplicación nutricional que ayuda a los usuarios a llevar un control detallado de sus comidas diarias y su ingesta calórica.', 
      background: 'captura-nutrit.png', 
      status: 'Activo' 
    },
    { 
      title: 'CarOnPoint', 
      description: 'Un sistema de venta de autos usados que permite a los usuarios interactuar mediante un chat para facilitar la compra y venta de vehículos.', 
      background: 'captura-caronp.png', 
      status: 'En progreso' 
    },
    { 
      title: 'Nutrit-Track Backend', 
      description: 'La versión mejorada de Nutrit-Track, con un backend real desarrollado en Node.js y Express para gestionar datos y usuarios.', 
      background: 'captura-nutri2.png', 
      status: 'Finalizado' 
    },
    { 
      title: 'Biblioteca de Gestión de Libros', 
      description: 'Un sistema de gestión para bibliotecas, que permite el control de préstamos y la administración de los libros disponibles.', 
      background: 'cap-biblio-java.png', 
      status: 'Activo' 
    },
    { 
      title: 'Biblioteca C', 
      description: 'Un sistema similar al anterior, pero desarrollado en C con estructuras dinámicas para el manejo de los libros y los usuarios.', 
      background: 'cap-biblio-c.png', 
      status: 'Finalizado' 
    },
    { 
      title: 'Proyectos Académicos en C', 
      description: 'Proyectos académicos realizados en C, abarcando diversos algoritmos y estructuras de datos en este lenguaje.', 
      background: 'proyectsC.png', 
      status: 'En progreso' 
    },
    { 
      title: 'Proyectos Académicos en JavaScript', 
      description: 'Implementación de proyectos académicos utilizando JavaScript, aplicando conocimientos en programación web y lógica.', 
      background: 'proyectsJavascript.png', 
      status: 'En progreso' 
    },
    { 
      title: 'Proyectos Académicos en Java', 
      description: 'Proyectos desarrollados en Java, donde se abordan diferentes estructuras de datos y técnicas de programación orientada a objetos.', 
      background: 'proyectsJava.png', 
      status: 'Finalizado' 
    },
    { 
      title: 'Proyectos en Angular', 
      description: 'Desarrollo de proyectos utilizando Angular, enfocándose en la creación de aplicaciones web dinámicas y escalables.', 
      background: 'proyectsAngular.png', 
      status: 'Activo' 
    }
  ];

  responsiveOptions: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
      { breakpoint: '768px', numVisible: 2, numScroll: 1 },
      { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'Activo': return 'success';
      case 'En progreso': return 'warning';
      case 'Finalizado': return 'info';
      default: return 'secondary';
    }
  }
  
}

