import { Component, OnInit, Input } from '@angular/core';
import { IProductDataItem, ICartItem } from '../shop/product-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product: ICartItem;

  constructor(private cartService: CartService, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  get imageUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.product.image);
  }

  get totalPrice(): string {
    return (Number(this.product.price) * this.product.quantity).toFixed(2);
  }

  public removeItem() {
    this.cartService.removeItem(this.product);
  }
}
