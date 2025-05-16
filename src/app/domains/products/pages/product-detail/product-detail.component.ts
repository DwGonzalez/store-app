import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() id?: number;

  product = signal<Product | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  addToCartHandler() {
    if (this.product()) {
      this.cartService.addToCart(this.product()!);
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage);
  }
}
