import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts?: Product[];

  totalPrice?: number;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getCartProducts().subscribe((products) => {
      this.cartProducts = products;
    });
  }
}
