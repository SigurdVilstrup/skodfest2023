import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  private readonly _productsInCart = new BehaviorSubject<Product[]>([]);

  readonly productsInCart$ = this._productsInCart.asObservable();

  constructor() {}

  get productsInCart(): Product[] {
    return this._productsInCart.getValue();
  }

  private set productsInCart(val: Product[]) {
    this._productsInCart.next(val);
  }

  public addProductToCart(product: Product) {
    this.productsInCart = [...this.productsInCart, product];
  }
}
