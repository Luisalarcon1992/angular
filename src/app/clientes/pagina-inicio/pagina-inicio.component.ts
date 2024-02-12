import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  nuevoCliente: ICliente = {
    credito:0,
    nombre: ''
  }

  clientes: ICliente[] = []

  agregar() {

    const nuevoClienteCopia: ICliente = { ...this.nuevoCliente };

    this.clientes.push(nuevoClienteCopia);

    this.nuevoCliente = { credito: 0, nombre: '' };

    console.log(this.clientes);

  }

  

  ngOnInit(): void {
      
  }

}
