import { Component, OnInit, Input } from '@angular/core';
import { IProductDataItem } from '../shop/product-data';
import { CartService } from '../cart.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  private _product: IProductDataItem;
  public dollars = '0';
  public cents = '00';

  @Input() set product(product: IProductDataItem) {
    this._product = product;
    const splitPrice = product.price.split('.');
    this.dollars = splitPrice[0];
    this.cents = splitPrice[1];
  }

  get product(): IProductDataItem {
    return this._product;
  }

  constructor(private cartService: CartService, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

  getImageUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.product.image);
  }
}
