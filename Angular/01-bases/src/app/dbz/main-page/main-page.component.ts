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
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  agregar(){

    console.log(this.nuevo)
  }


}
