import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductData } from '../shop/product-data';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  testProduct = ProductData[0];
  constructor(public cartService: CartService) {}

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

  get subtotal(): string {
    const { cartItems } = this.cartService;
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += Number(item.price) * item.quantity;
    }
    return subtotal.toFixed(2);
  }

  get total(): string {
    return (Number(this.subtotal) + 12).toFixed(2);
  }
}
