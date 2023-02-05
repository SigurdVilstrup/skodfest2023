import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  products?: Product[] = [
    {
      name: 'Partoutbillet',
      price: 500,
      link: '',
      description: 'Få adgang til Skodfest alle dage',
    },
    {
      name: 'Endagsbillet',
      price: 300,
      link: '',
      description: 'Få adgang til Skodfest en overnatning',
    },
  ];

  latestProduct?: Product;

  productsInCart?: Product[];

  constructor(private productsService: ProductsStoreService) {}

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
