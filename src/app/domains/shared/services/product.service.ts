import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://api.escuelajs.co/api/v1/products';

  private http = inject(HttpClient);

  constructor() {}

  getProducts(category_id?: number) {
    const completeUrl = new URL(this.url);
    if (category_id)
      completeUrl.searchParams.set('categoryId', category_id.toString());
    return this.http.get<Product[]>(completeUrl.toString());
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
