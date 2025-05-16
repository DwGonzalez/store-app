import { Component, computed, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  cart = computed(() => this.cartService.cart());

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now() + Math.random(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 5',
        price: 200,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 6',
        price: 300,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + Math.random(),
        title: 'Product 7',
        price: 50,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
