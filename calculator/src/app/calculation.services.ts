import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  handleKeyPress(currentValue: string, key: string): string {
    if (currentValue === '0' && key !== '.') {
      return key; // Replace '0' with the first number pressed
    }
    return currentValue + key; // Append other keys
  }

  calculate(expression: string): string {
    try {
      // Use a safe evaluation method instead of eval
      return Function('"use strict";return (' + expression + ')')().toString();
    } catch {
      return 'Error'; // Handle any calculation errors
    }
  }

  deleteLast(value: string): string {
    return value.length > 1 ? value.slice(0, -1) : '0'; // Delete last character or reset to '0'
  }
}
