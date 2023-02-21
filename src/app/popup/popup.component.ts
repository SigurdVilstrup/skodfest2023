import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-popup',
  template: `
    <ng-container *ngIf="display">
      <div class="background" (click)="closePopup()">
        <div class="popup">
          <div class="close-icon" (click)="closePopup()">X</div>
          <h1 class="pb-2">{{ title }}</h1>
          <button
            class="btn btn-orange mb-2"
            *ngIf="displayProduct"
            (click)="add()"
          >
            Tilføj én {{ displayProduct.name | lowercase }} til kurven for kun
            {{ displayProduct.price }} kr.!
          </button>
          <button class="btn btn-orange mt-2">Nej tak!</button>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() title!: string;
  @Input() display!: boolean;
  @Input() displayProduct?: Product;

  @Output() close = new EventEmitter<boolean>();
  @Output() addProduct = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  closePopup() {
    this.close.emit(true);
  }

  add() {
    this.addProduct.emit(this.displayProduct);
  }
}
