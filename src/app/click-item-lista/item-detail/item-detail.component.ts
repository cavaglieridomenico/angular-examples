import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  @Input() productData: Product;
  constructor() {}

  ngOnInit(): void {}
}
