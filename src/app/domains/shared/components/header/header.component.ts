import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
    console.log('toggleSideMenu', this.hideSideMenu());
  }
}
