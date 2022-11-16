import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: Array<string> = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}

