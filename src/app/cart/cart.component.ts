import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  link: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [
    { name: 'Partoutbillet', price: 600.0, link: '' },
    { name: 'Partoutbillet', price: 600.0, link: '' },
    { name: 'Partoutbillet', price: 600.0, link: '' },
    { name: 'Partoutbillet', price: 600.0, link: '' },
    { name: 'Endagsbillet', price: 300.0, link: '' },
    { name: 'Endagsbillet', price: 300.0, link: '' },
    { name: 'Endagsbillet', price: 300.0, link: '' },
    { name: 'Kasse øl', price: 150.0, link: '' },
    { name: 'Kasse øl', price: 150.0, link: '' },
    { name: 'Kasse øl', price: 150.0, link: '' },
  ];

  totalPrice?: number;

  constructor() {}

  ngOnInit(): void {
    let totalSum = 0;
    this.cartProducts.forEach((product) => {
      totalSum += product.price;
    });
    this.totalPrice = totalSum;
  }
}
