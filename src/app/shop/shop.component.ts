import { Component, OnInit } from '@angular/core';
import { ProductData } from './product-data';
import { ActivatedRoute } from '@angular/router';
import { FishingCompanyData, IFishingCatch } from './fishing-company-data';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../cart.service';

const FULL_CATCH_AMOUNT = 200;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  notificationHidden = false;
  productList = ProductData;
  fishingCompanyList = FishingCompanyData;
  currentFishingCompanyIndex = 0;
  currentFishingCompany = FishingCompanyData[0];

  newProductsList = ProductData.slice(0, 4);
  showLocalFisherman = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cartService: CartService
  ) {
    this.showLocalFisherman = this.route.snapshot.queryParams.localFisherman;
  }

  public getCatchPercentage(c: IFishingCatch): string {
    return (c.amount / FULL_CATCH_AMOUNT) * 100 + '%';
  }

  public getCatchDesc(c: IFishingCatch): string {
    return `${c.amount}lbs ${c.name} on ${c.date}`;
  }

  public reserveProduct() {
    // hard coded for demo - just add pink salmon
    this.cartService.addToCart(ProductData[1]);
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

  public rotateGalleryLeft() {
    this.currentFishingCompanyIndex--;
    if (this.currentFishingCompanyIndex < 0) {
      this.currentFishingCompanyIndex = this.fishingCompanyList.length - 1;
    }
    this.currentFishingCompany = this.fishingCompanyList[this.currentFishingCompanyIndex];
  }

  public rotateGalleryRight() {
    this.currentFishingCompanyIndex++;
    if (this.currentFishingCompanyIndex >= this.fishingCompanyList.length) {
      this.currentFishingCompanyIndex = 0;
    }
    this.currentFishingCompany = this.fishingCompanyList[this.currentFishingCompanyIndex];
  }

  public getGalleryImageSrc(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentFishingCompany.image);
  }
}
