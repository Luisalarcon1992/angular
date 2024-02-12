import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  empleadoBorrado: string = '';

  @Input()
  empleados: IEmpleado[] = [];

  @Input()
  titulo: string = '';

  borrar() {
    const emp = this.empleados.pop();
    if(emp !== undefined) {
      this.empleadoBorrado = `${emp?.nombre} ${emp?.apellido} se ha eliminado de los registros.`
    } else {
      this.empleadoBorrado = `No hay registros para eliminar`
    }
  }

  borrarShift() {
    const emp = this.empleados.shift();
    if(emp !== undefined) {
      this.empleadoBorrado = `${emp?.nombre} ${emp?.apellido} se ha eliminado de los registros.`
    } else {
      this.empleadoBorrado = `No hay registros para eliminar`
    }
  }


}
