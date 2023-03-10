import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, Color } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {

    console.log(ordenarPor);
    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
        break;
      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1);
        break;
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
        break;
      default:
        return heroes;
    }
  
  }
}
