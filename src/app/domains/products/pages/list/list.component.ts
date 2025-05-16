import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 1,
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 2,
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('fromChild', event);
  }
}
