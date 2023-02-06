import { Component } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { ProductsStoreService } from './products-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private productsService: ProductsStoreService) {}
}
