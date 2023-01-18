import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

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

  constructor(private productsService: ProductsService) {}

  addTicketToCart(product: Product) {
    this.productsService.addProductToCart(product);
  }

  ngOnInit(): void {}
}
