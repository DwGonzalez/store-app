import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
    <div class="container mx-auto">
      <router-outlet />
    </div>
  `
})
export class AppComponent {}
