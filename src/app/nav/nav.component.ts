import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  mobileMenuOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  public toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  public get cartItemsCount(): number | null {
    const numItems = this.cartService.cartItems.length;
    return numItems > 0 ? numItems : null;
  }
}
