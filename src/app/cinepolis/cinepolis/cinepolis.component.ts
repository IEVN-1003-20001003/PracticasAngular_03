import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  numBol: number = 0;
  cantComp: number = 0;
  descAdi: number = 0;
  total: number = 0;
  tarjetas: string = '';
  descTarj: number = 0;
  nombre: string = '';
  Subtotal: number = 0;
  precioUni: number = 12;
  descuentoinicial: number = 0;
  descuentotarjeta: number = 0;
  descuentoTotal: number = 0;


  condicion(): void {
    const maxBolP = this.cantComp * 7;

    if (this.numBol > maxBolP) {
      alert('Solo se pueden vender máximo ' + maxBolP + ' boletos por persona. Realiza una nueva compra');
      this.numBol = 1;
    }

  }


  operacion(): number {
    this.Subtotal = this.numBol * this.precioUni;
    if (this.numBol >= 5) { //si el cliente adquiere 5 o más boletos
      this.descAdi = 15; //se aplica un 15% de descuento en su compra
      this.descuentoinicial = this.Subtotal * (this.descAdi / 100); //calcula el descuento por boletos
      this.descuentoTotal = this.Subtotal - this.descuentoinicial; //da el primer precio final con descuento por boletos
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.descuentoTotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.descuentoTotal;
      return this.total;
    } else if (this.numBol >= 3) {
      this.descAdi = 10;
      this.descuentoinicial = this.Subtotal * (this.descAdi / 100); //calcula el descuento por boletos
      this.descuentoTotal = this.Subtotal - this.descuentoinicial; //da el primer precio final con descuento por boletos
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.descuentoTotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.descuentoTotal;
      return this.total;
    } else if (this.numBol <= 2) {
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.Subtotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.Subtotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.Subtotal;
      return this.total;
    }
    const neto = this.total;
    return neto;

  }


  reiniciar() {
    window.location.reload();
  }
}