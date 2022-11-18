import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  constructor(private dbService: DbzService) { }

  ngOnInit(): void {
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }
    console.log('Hi');
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbService.addNuevoPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje = { nombre: '', poder: 0 }
  }

}
