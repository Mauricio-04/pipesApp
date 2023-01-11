import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  ordenarPor:string ='';

  cambiarMayus:boolean = true;
  heroes:Heroe[] =[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.rojo
    }
  ];

  changeValue(){
   this.cambiarMayus = !this.cambiarMayus;
  }
  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor);
  }
}
