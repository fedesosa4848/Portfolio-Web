import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-tech-progress',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './tech-progress.component.html',
  styleUrls: ['./tech-progress.component.css']
})
export class TechProgressComponent {
  @Input() progress: number = 0; // Progreso recibido del skill seleccionado
  @Output() progressSelected: EventEmitter<number> = new EventEmitter<number>(); // Emite el progreso seleccionado

  // Configuración del gráfico, con valores dinámicos de progreso y faltante
  chartOptions = {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      text: "Progreso"
    },
    data: [{
      type: "doughnut",
      yValueFormatString: "#,###.##'%'",
      indexLabel: "{name}",
      indexLabelFontColor: "ghostwhite",                                      
      dataPoints: [
        { y: 0, name: "Realizado" }, // Se actualizará con el valor del progreso
        { y: 0, name: "Faltante" }, // Se actualizará con el valor faltante
      ]
    }]
  };

  // Método que actualiza el gráfico con el progreso y el valor faltante
  updateChart() {
    const realizado = this.progress; // El progreso recibido
    const faltante = 100 - realizado; // El valor faltante hasta 100%
    
    // Actualizamos los puntos de datos en el gráfico
    this.chartOptions.data[0].dataPoints[0].y = realizado;
    this.chartOptions.data[0].dataPoints[1].y = faltante;

    // Emitimos el progreso al componente padre (si lo necesitas)
    this.progressSelected.emit(this.progress);
  }

  // Llamamos a updateChart cuando se reciba el valor de progreso
  ngOnChanges() {
    this.updateChart();
  }
}
