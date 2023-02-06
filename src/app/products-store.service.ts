import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  private readonly _productsInCart = new BehaviorSubject<Product[]>([]);

  readonly productsInCart$ = this._productsInCart.asObservable();

  public products: Product[] = [];

  constructor(public firestore: Firestore) {
    this.retrieveData();
  }

  retrieveData() {
    const dbInstance = collection(this.firestore, 'products');
    getDocs(dbInstance).then((response) => {
      this.products = [
        ...response.docs.map((item) => {
          return {
            name: item.get('name'),
            price: item.get('price'),
            description: item.get('description'),
            product_id: item.get('product_id'),
          };
        }),
      ];
    });
  }

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
