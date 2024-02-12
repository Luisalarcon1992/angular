import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent {


  numero:number = 0;

  incrementar() {
    this.numero += 1;
  }

  decrementar() {
    this.numero -= 1;
  }
}
