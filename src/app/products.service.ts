import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsInCart?: Product[];

  constructor() {}

  public getCartProducts(): Observable<Product[] | undefined> {
    return of(this.productsInCart);
  }

  public addProductToCart(product: Product) {
    this.productsInCart?.push(product);
  }
}
