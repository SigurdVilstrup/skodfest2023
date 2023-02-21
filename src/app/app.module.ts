import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { ContactComponent } from './contact/contact.component';
import { PackinglistComponent } from './packinglist/packinglist.component';
import { CartComponent } from './cart/cart.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { ProductsComponent } from './products/products.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'ticket',
    component: TicketComponent,
    data: { animation: 'Ticket' },
  },
  {
    path: 'packinglist',
    component: PackinglistComponent,
    data: { animation: 'Packinglist' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { animation: 'Cart' },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { animation: 'Checkout' },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { animation: 'products' },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    TicketComponent,
    PackinglistComponent,
    CartComponent,
    CheckoutComponent,
    ProductsComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
