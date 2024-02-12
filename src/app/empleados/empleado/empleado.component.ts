import { Component } from '@angular/core';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  tituloTabla: string = 'Titulo de la tabla';

  empleado: IEmpleado[] = [
    {
      nombre: 'Luis',
      apellido: 'Alarcon',
      direccion: 'No sé',
      sueldo: 2000,
    },
    {
      apellido: 'Doe',
      nombre: 'Joe',
      direccion: 'Tampoco sé',
      sueldo: 3000,
    },
    {
      apellido: 'Perez',
      nombre: 'Juan',
      direccion: 'quien sabe',
      sueldo: 4000,
    }]

    
  
}
