import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  get cartCount() {
    return this.cart().length;
  }

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update((products) =>
      this.cart().filter((pro) => pro.id !== product.id)
    );
  }
}
