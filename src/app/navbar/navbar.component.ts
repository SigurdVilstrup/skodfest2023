import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  productsInCart$?: Product[];

  constructor(private productsService: ProductsStoreService) {}

  ngOnInit(): void {
    this.productsService.productsInCartObservable.subscribe((value) => {
      this.productsInCart$ = value;
    });
  }
}
