import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

  @Output()
  techEmiter = new EventEmitter<string>();
  
  onTechClick(tech: string) {
    this.techEmiter.emit(tech);
  }

}
