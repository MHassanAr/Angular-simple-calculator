import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result: string = '';
  keys: string[] = [
    '7', '8', '9', 'DEL',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '.', '0', '/', 'x'
  ];

  //Handling key presses
  onKeyPress(key: string) {
    if (key == 'DEL') {
      this.result = this.deleteLast(this.result);
    } else if (key === '=') {
      this.result = this.evaluateExpression();
    } else {
      this.result += key === 'x' ? '*' : key;
    }
  }

  //Evaluate the expression function
  evaluateExpression(): string {
    try {
      return Function('"use strict";return (' + this.result + ')')().toString();
    } catch {
      return 'Error'; 
    }
  }

  //Delete the last character function
  deleteLast(value: string): string {
    return value.length > 1 ? value.slice(0, -1) : '0'; 
  }

  //Reset the calculator function
  reset() {
    this.result = '';
  }


}
