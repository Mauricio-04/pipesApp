import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Maria', 'Naruto', 'Goku', 'Yamcha', 'Krilin', 'Ania'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarPersona() {
    this.nombre = 'Mauricio';
    this.genero = 'masculino';
  }
  borrarCliente() {
    this.clientes.shift()
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa,Canada'
  }
  //Json Pipe
  heroes = [
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: true,
    }
  ]
  //
  miObservable = interval(1000);

  valorPromesa = new  Promise((resolve,reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data de promesa');
    },3500);
  })
}
