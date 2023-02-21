import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInAnimation } from '../animations';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  animations: [slideInAnimation],
})
export class TicketComponent implements OnInit {
  showPopup: boolean = false;
  products?: Product[] = [];
  upsaleProduct: Product = {
    name: 'Kasse fælles øl',
    price: 130,
    priority: 100,
    product_id: 'beer_0',
    type: 'beer',
  };

  latestProduct?: Product;

  productsInCart?: Product[];

  @ViewChild('bottomModal', { static: true }) bottomModal?: ElementRef;

  constructor(private productsService: ProductsStoreService) {
    this.products = productsService.products
      .filter((product) => product.type == 'ticket')
      .reverse();
  }

  addTicketToCart(product: Product) {
    this.productsService.addProductToCart(product);
    this.latestProduct = product;
    this.showPopup = true;
    this.showModal();
  }

  addUpsaleProductToCart() {
    this.productsService.addProductToCart(this.upsaleProduct);
    this.showPopup = false;
    this.latestProduct = this.upsaleProduct;
    this.showModal();
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit(): void {
    this.productsInCart = this.productsService.productsInCart;
  }

  showModal() {
    this.bottomModal?.nativeElement.classList.remove('hide');

    new Promise((r) => setTimeout(r, 3000)).then((_) => {
      this.closeModal();
    });
  }

  closeModal() {
    this.bottomModal?.nativeElement.classList.add('hide');
  }
}
