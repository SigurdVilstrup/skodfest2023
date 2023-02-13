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
  products?: Product[] = [];

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
    this.showModal();
  }

  ngOnInit(): void {
    this.productsInCart = this.productsService.productsInCart;
  }

  showModal() {
    this.bottomModal?.nativeElement.classList.remove('hide');

    new Promise((r) => setTimeout(r, 5000)).then((_) => {
      this.closeModal();
    });
  }

  closeModal() {
    this.bottomModal?.nativeElement.classList.add('hide');
  }
}
