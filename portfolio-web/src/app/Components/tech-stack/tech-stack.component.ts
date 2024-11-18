import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

  tools = [
    { 
        name: 'CSS', 
        logo: 'css-icon.png', 
        description: 'Diseño y estilización de interfaces web mediante el uso de selectores, cajas de modelo, y flexbox para el layout.' 
    },
    { 
        name: 'Angular', 
        logo: 'angular-icon.png', 
        description: 'Desarrollo de aplicaciones web utilizando el framework Angular, con manejo de componentes, rutas, y consumo de APIs RESTful.' 
    },
    { 
        name: 'Django', 
        logo: 'django-icon.png', 
        description: 'Desarrollo de aplicaciones web con Python y Django, utilizando vistas, modelos y plantillas, además de implementación de bases de datos relacionales.' 
    },
    { 
        name: 'HTML5', 
        logo: 'HTML5_logo_and_wordmark.svg.png', 
        description: 'Estructuración de páginas web mediante etiquetas semánticas y optimización de contenido para SEO y accesibilidad.' 
    },
    { 
        name: 'MySQL', 
        logo: 'Mysql.svg.png', 
        description: 'Diseño y gestión de bases de datos relacionales utilizando MySQL, trabajando con relaciones, joins, subconsultas y procedimientos almacenados.' 
    },
    { 
        name: 'Java', 
        logo: 'pngwing.com.png', 
        description: 'Programación orientada a objetos en Java, manejo de archivos binarios y JSON, implementación de estructuras de datos y algoritmos.' 
    },
    { 
        name: 'Node.js', 
        logo: 'Node.js_logo.svg.png', 
        description: 'Desarrollo de servidores y aplicaciones backend con Node.js y Express, incluyendo la creación de bases de datos personalizadas con almacenamiento en archivos.' 
    },
    { 
        name: 'C', 
        logo: 'The_C_Programming_Language_logo.svg.png', 
        description: 'Fundamentos de programación estructurada, uso de punteros simples y dobles, manejo de estructuras estáticas y dinámicas en C.' 
    },
    { 
        name: 'TypeScript', 
        logo: 'Typescript_logo_2020.svg.png', 
        description: 'Desarrollo de aplicaciones con TypeScript, utilizando tipos estáticos, interfaces y clases para mejorar el desarrollo de JavaScript.' 
    },
    { 
        name: 'JavaScript', 
        logo: 'Unofficial_JavaScript_logo_2.svg.png', 
        description: 'Desarrollo web con JavaScript, incluyendo el manejo de funciones asincrónicas con async/await y fetch para consumir APIs.' 
    },
    { 
        name: 'Python', 
        logo: 'Python-logo-notext.svg.png', 
        description: 'Programación orientada a objetos y desarrollo de aplicaciones web con Django, creando páginas dinámicas y gestionando bases de datos.' 
    }
];


  onTechClick(techName: string) {
    console.log(`${techName} clicked`);
  }

  @Output()
  techEmiter = new EventEmitter<string>();
  
  

}
