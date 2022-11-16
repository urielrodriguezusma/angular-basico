import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl:'./contador.component.html',
  styleUrls: ['./contador.component.sass']
})
export class ContadorComponent implements OnInit {

  contador: number = 0;
  base:number= 5;

  constructor() { }

  ngOnInit(): void {
  }

  acomular(valor:number) {
    this.contador += valor ;
  }
}
