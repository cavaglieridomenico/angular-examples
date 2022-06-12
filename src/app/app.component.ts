import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './click-item-lista/shared/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-examples';
  clickedProduct: Product;
  onRecivedClickedProduct(data: Product) {
    this.clickedProduct = data;
  }
}
