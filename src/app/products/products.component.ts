import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Product[] = [];

  latestProduct?: Product;

  productsInCart?: Product[];

  @ViewChild('bottomModal', { static: true }) bottomModal?: ElementRef;

  constructor(private productsService: ProductsStoreService) {
    this.products = productsService.products.sort((a: Product, b: Product) => {
      if (a.priority > b.priority) return 1;
      if (a.priority < b.priority) return -1;
      else return 0;
    });
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
