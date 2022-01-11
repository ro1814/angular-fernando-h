import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';

interface Personaje {
  nombre: string,
  poder: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000,
    },
    {
      nombre:'Vegeta',
      poder: 7500
    },
    {
      nombre:'Trunks',
      poder: 14000
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){

    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo)

    this.personajes.push( this.nuevo);
    this.nuevo = { 
      nombre: '',
      poder: 0 
     }
  }


}
