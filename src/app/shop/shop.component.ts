import { Component, OnInit } from '@angular/core';
import { ProductData } from './product-data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  notificationHidden = false;
  productList = ProductData;
  newProductsList = ProductData.slice(0, 4);

  constructor() {}

  ngOnInit() {}

  hideNotification() {
    this.notificationHidden = true;
  }
}
