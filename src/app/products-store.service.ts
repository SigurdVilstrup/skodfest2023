import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';
import { addDoc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
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
            type: item.get('type'),
            priority: item.get('priority'),
          };
        }),
      ];
    });
  }

  get productsInCartObservable(): Observable<Product[]> {
    return this.productsInCart$;
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

  public removeProductFromCart(productIndex: number) {
    this.productsInCart.splice(productIndex, 1);
  }

  public addOrder(data: any): boolean {
    const dbInstance = collection(this.firestore, 'orders');
    const order = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      order_paid: false,
      total: this.productsInCart.reduce((accumulator, current) => {
        return accumulator + current.price;
      }, 0),
      products: [...this.productsInCart],
    };
    addDoc(dbInstance, order)
      .then(() => {
        this.productsInCart = [];
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
    return false;
  }
}
