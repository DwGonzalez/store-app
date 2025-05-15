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
    // SOLO CORRE UNA VEZ

    // SI SE DESTRUYE VUELVE A CORRER
    console.log('constructor');
    console.log('-'.repeat(20));
  }

  ngOnChanges(changes: SimpleChanges) {
    // SE EJECUTA ANTES Y DURANTE EL RENDERIZADO DEL COMPONENTE
    console.log('ngOnChanges');
    console.log('-'.repeat(20));
    console.log('changes', changes);

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // DESPUESS DEL RENDERIZADO DEL COMPONENTE
    // SOLO CORRE UNA VEZ
    // SE PUEDE UTILIZAR ASINCRONO: async, then, await, subs
    console.log('ngOnInit');
    console.log('-'.repeat(20));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    // DESPUES DEL ngOnInit
    // DESPUES DEL RENDERIZADO
    // SI LOS HIJOS DE ESTE COMPONENT YA FUERON RENDERIZADOS
    console.log('ngAfterViewInit');
    console.log('-'.repeat(20));
  }

  ngOnDestroy() {
    // CUANDO EL COMPONENTE SE DESTRUYE
    // POR EJEMPLO CON UN IF EN EL HTML
    console.log('ngOnDestroy');
    console.log('-'.repeat(20));
  }

  doSomething() {
    console.log('change duration');
  }
}
