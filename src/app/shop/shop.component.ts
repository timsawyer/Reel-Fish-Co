import { Component, OnInit } from '@angular/core';
import { ProductData } from './product-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  notificationHidden = false;
  productList = ProductData;
  newProductsList = ProductData.slice(0, 4);
  showLocalFisherman = false;

  constructor(private route: ActivatedRoute) {
    this.showLocalFisherman = this.route.snapshot.queryParams.localFisherman;
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

  hideNotification() {
    this.notificationHidden = true;
  }

  closeFisherman() {
    this.showLocalFisherman = false;
  }

  private _scrollTo(element: Element, to: number, duration: number) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = this._easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  private _easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  scrollToProducts() {
    const productsTitle = document.getElementById('productsTitle');
    const y = productsTitle.getBoundingClientRect().top - 90;
    this._scrollTo(document.scrollingElement, y, 1000);
  }
}
