import { Component, OnInit, Input } from '@angular/core';
import { IProductDataItem } from '../shop/product-data';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product: IProductDataItem;

  constructor() {}

  ngOnInit() {}
}
