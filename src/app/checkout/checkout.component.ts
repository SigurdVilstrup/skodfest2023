import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { Product } from '../product';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartProducts?: Product[];
  totalPrice?: number;

  @ViewChild('bottomModal', { static: true }) bottomModal?: ElementRef;

  constructor(private productsService: ProductsStoreService) {}

  ngOnInit(): void {
    this.cartProducts = this.productsService.productsInCart;
    this.totalPrice = this.cartProducts.reduce((accumulator, current) => {
      return accumulator + current.price;
    }, 0);
  }

  onClickSubmit(data: any) {
    if (data.email && data.firstname && data.lastname && data.phone) {
      this.productsService.addOrder(data);
      this.showModal();
    } else {
      alert('Du glemte vist at udfylde noget...');
    }
  }

  showModal() {
    this.bottomModal?.nativeElement.classList.remove('hide');
  }

  closeModal() {
    this.bottomModal?.nativeElement.classList.add('hide');
  }
}
