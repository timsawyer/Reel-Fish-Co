import { Injectable } from '@angular/core';
import { IProductDataItem } from './shop/product-data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: IProductDataItem[] = [];
  constructor() {}

  public addToCart(item: IProductDataItem) {
    this.cartItems.push(item);
  }
}
