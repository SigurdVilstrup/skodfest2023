import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  products?: Product[] = [];

  latestProduct?: Product;

  productsInCart?: Product[];

  constructor(private productsService: ProductsStoreService) {
    this.products = productsService.products
      .filter((product) => product.type == 'ticket')
      .reverse();
  }

  addTicketToCart(product: Product) {
    this.productsService.addProductToCart(product);
    this.latestProduct = product;
  }

  ngOnInit(): void {
    this.productsInCart = this.productsService.productsInCart;
  }

  closeToast() {
    this.latestProduct = undefined;
    console.log(this.latestProduct);
  }
}
