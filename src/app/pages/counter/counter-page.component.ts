import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styles:`
    button{
      padding: 5px;
      margin: 5px 10px;
      whidth: 75px;
  }
  `,
})
export class CounterPageComponent {

  counter = 18;

  incrementaUno(valor: number) {
    this.counter += valor;
  }

  resetearCounter() {
    this.counter = 0;
  }

}
