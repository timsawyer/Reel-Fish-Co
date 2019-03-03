import { Injectable } from '@angular/core';
import { IProductDataItem, ICartItem } from './shop/product-data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: ICartItem[] = [];
  public totalQuantity = 0;
  constructor() {}

  public addToCart(item: IProductDataItem) {
    this.totalQuantity++;

    const { id } = item;
    const alreadyAddedProduct = this.cartItems.find(ci => ci.id === id);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
    } else {
      const newProduct = { ...item, quantity: 1 };
      this.cartItems.push(newProduct);
    }
  }

  public removeItem(item: ICartItem) {
    const itemIndex = this.cartItems.findIndex(ci => ci.id === item.id);
    this.totalQuantity = this.totalQuantity - item.quantity;
    this.cartItems.splice(itemIndex, 1);
  }
}
