import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

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
