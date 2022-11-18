import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _lstPersonajes: Array<Personaje> = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 14000
    }
  ];

  constructor() {
    console.log('Servicio inicializado');
  }

  get personajes(): Personaje[] {
    return [...this._lstPersonajes];
  }

  addNuevoPersonaje(addPersonaje: Personaje) {
    this._lstPersonajes.push(addPersonaje);
  }
}
