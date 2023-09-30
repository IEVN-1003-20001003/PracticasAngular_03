import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})
export class PotenciasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  resultadoMen: string = '';

  operacion(): void {
    const num1Numero = parseFloat(this.num1);
    const num2Numero = parseFloat(this.num2);

    if (!isNaN(num1Numero) && !isNaN(num2Numero)) {
      this.resultado = num1Numero * num2Numero;
      const proceso = this.generarProceso(num1Numero, num2Numero);
      this.resultadoMen = `${proceso.join(' + ')} es igual ${this.resultado}`;
    } else {
      alert('Por favor, ingrese números válidos para los números 1 y 2.');
      this.resultadoMen = '';
    }
  }

  generarProceso(num1: number, num2: number): number[] {
    const proceso: number[] = [];

    for (let i = 1; i <= num2; i++) {
      proceso.push(num1);
    }

    return proceso;
  }
}