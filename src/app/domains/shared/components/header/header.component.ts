import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = computed(() => this.cartService.cart());
  cartTotal = computed(() =>
    this.cart().reduce((total, product) => total + product.price, 0)
  );

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
    console.log('toggleSideMenu', this.hideSideMenu());
  }

  removeFromCart(product: Product) {
    console.log(product);
    this.cartService.removeFromCart(product);
  }
}
