import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [CurrencyPipe, RouterLinkWithHref, RouterLinkActive],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  /* FORMA DE INJECT */
  private cartService = inject(CartService);
  cart = computed(() => this.cartService.cart());
  total = computed(() => this.cartService.total());
  /* FORMA DE INJECT */

  /* FORMA DE CONSTRUCTOR */
  // cart;
  // total;

  // constructor(private readonly cartService: CartService) {
  //   this.cart = this.cartService.cart;
  //   this.total = this.cartService.total;
  // }
  /* FORMA DE CONSTRUCTOR */

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
    console.log('toggleSideMenu', this.hideSideMenu());
  }

  removeFromCart(product: Product) {
    console.log(product);
    this.cartService.removeFromCart(product);
  }
}
