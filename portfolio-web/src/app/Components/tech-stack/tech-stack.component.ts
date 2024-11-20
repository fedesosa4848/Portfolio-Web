import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TechProgressComponent } from "../tech-progress/tech-progress.component";

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TechProgressComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

    tools = [
        { 
            name: 'CSS', 
            logo: 'css-icon.png', 
            description: 'Diseño y estilización de interfaces web mediante el uso de selectores, cajas de modelo, flexbox, grid, y animaciones básicas para mejorar la experiencia del usuario.',
            progress: 70
        },
        { 
            name: 'Angular', 
            logo: 'angular-icon.png', 
            description: 'Desarrollo de aplicaciones web utilizando Angular, trabajando con componentes, servicios, rutas, formularios reactivos, LocalStorage, y consumo de APIs RESTful.',
            progress: 60
        },
        { 
            name: 'Django', 
            logo: 'django-icon.png', 
            description: 'Desarrollo de aplicaciones web con Python y Django, utilizando vistas, modelos, plantillas, y un sistema básico de autenticación y mensajería.',
            progress: 50
        },
        { 
            name: 'HTML5', 
            logo: 'HTML5_logo_and_wordmark.svg.png', 
            description: 'Estructuración de páginas web mediante etiquetas semánticas, optimización para SEO, accesibilidad, y buenas prácticas en el desarrollo.',
            progress: 70
        },
        { 
            name: 'MySQL', 
            logo: 'Mysql.svg.png', 
            description: 'Diseño y gestión de bases de datos relacionales utilizando MySQL, trabajando con relaciones, joins, subconsultas, procedimientos almacenados y excepciones.',
            progress: 65
        },
        { 
            name: 'Java', 
            logo: 'pngwing.com.png', 
            description: 'Programación orientada a objetos en Java, manejo de archivos binarios y JSON, implementación de estructuras de datos (listas, pilas, colas, árboles binarios de búsqueda) y algoritmos de ordenamiento.',
            progress: 60
        },
        { 
            name: 'Node.js', 
            logo: 'Node.js_logo.svg.png', 
            description: 'Desarrollo de aplicaciones backend con Node.js y Express, incluyendo la configuración básica de servidores y consumo de JSON Server para simular bases de datos.',
            progress: 30
        },
        { 
            name: 'C', 
            logo: 'The_C_Programming_Language_logo.svg.png', 
            description: 'Programación estructurada, manejo avanzado de punteros, estructuras dinámicas (listas, pilas, colas, árboles binarios), y manipulación de archivos binarios.',
            progress: 60
        },
        { 
            name: 'TypeScript', 
            logo: 'Typescript_logo_2020.svg.png', 
            description: 'Desarrollo de aplicaciones web con TypeScript, utilizando tipos estáticos, interfaces, clases y servicios para mejorar la robustez del código en Angular.',
            progress: 60
        },
        { 
            name: 'JavaScript', 
            logo: 'Unofficial_JavaScript_logo_2.svg.png', 
            description: 'Desarrollo web con JavaScript, manejo de funciones asincrónicas con async/await, promesas, y consumo de APIs con fetch; experiencia en manipulación del DOM.',
            progress: 60
        },
        { 
            name: 'Python', 
            logo: 'Python-logo-notext.svg.png', 
            description: 'Programación orientada a objetos y desarrollo de aplicaciones web con Django, incluyendo la creación de páginas dinámicas y la integración con bases de datos relacionales.',
            progress: 55
        }
    ];
    
    


  onTechClick(techName: string) {
    console.log(`${techName} clicked`);
    this.techEmiter.emit    
  }

  @Output()
  techEmiter = new EventEmitter<string>();
  
  

}
