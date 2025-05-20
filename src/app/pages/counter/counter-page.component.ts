
import { Component } from "@angular/core";

@Component({
  template:`
 
  `,
})

export class CounterPageComponent {

  counter = 18;

  incrementaUno(valor: number) {
    this.counter += valor;
  }

}
