import { Component, computed, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  cart = computed(() => this.cartService.cart());

  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  constructor() {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
