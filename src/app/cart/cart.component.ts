import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [slideInAnimation],
})
export class CartComponent implements OnInit {
  cartProducts?: Product[];
  totalPrice?: number;

  constructor(private productsService: ProductsStoreService) {}

  ngOnInit(): void {
    this.cartProducts = this.productsService.productsInCart;
    this.totalPrice = this.cartProducts.reduce((accumulator, current) => {
      return accumulator + current.price;
    }, 0);
  }

  removeProduct(productIndex: number) {
    this.productsService.removeProductFromCart(productIndex);
    this.totalPrice = this.cartProducts?.reduce((accumulator, current) => {
      return accumulator + current.price;
    }, 0);
  }
}
