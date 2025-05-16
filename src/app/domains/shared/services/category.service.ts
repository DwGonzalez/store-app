import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'https://api.escuelajs.co/api/v1/categories/';

  private http = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.http.get<Category[]>(this.url);
  }

  getCategory(id: number) {
    return this.http.get<Category>(this.url + id);
  }
}
