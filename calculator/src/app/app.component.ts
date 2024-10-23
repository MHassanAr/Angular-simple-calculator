import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalculationService } from './calculation.services'; // Import the service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string = '';

  // Inject the calculation service
  constructor(private calculationService: CalculationService) {}

  keys: string[] = [
    '7', '8', '9', 'DEL',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '.', '0', '/', 'x'
  ];

  isDarkTheme: boolean = true; // Initial theme state

  // Handling key presses by delegating to the service
  onKeyPress(key: string) {
    if (key === 'DEL') {
      this.result = this.calculationService.deleteLast(this.result);
    } else if (key === '=') {
      this.result = this.calculationService.calculate(this.result);
    } else {
      this.result = this.calculationService.handleKeyPress(this.result, key === 'x' ? '*' : key);
    }
  }

  // Reset the calculator
  reset() {
    this.result = '0'; // Reset to initial state
  }

  // Toggle theme
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
