import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // NO METODOS ASINCRONOS
    // SE EJECUTA ANTES DE QUE SE RENDERICE EL COMPONENTE
    console.log('constructor');
    console.log('-'.repeat(20));
  }

  ngOnChanges(changes: SimpleChanges) {
    // SE EJECUTA ANTES Y DURANTE EL RENDERIZADO DEL COMPONENTE
    console.log('ngOnChanges');
    console.log('-'.repeat(20));
    console.log('changes', changes);
  }
}
