import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() product: Product;

  @Output() clickedItem = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onClickItem() {
    this.clickedItem.emit();
  }
}
