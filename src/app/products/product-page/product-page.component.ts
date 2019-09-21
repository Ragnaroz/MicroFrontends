import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Product } from 'src/app/models/product';
import { PurchaseService } from 'src/app/services/purchase.service';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private purchaseService: PurchaseService
  ) { }

  ngOnInit() {
    let shoppingCartEle = document.querySelector('shopping-cart');
    shoppingCartEle.addEventListener('onPurchase', (event: CustomEvent) => {
      this.processPurchase(event.detail);
    })
  }

  private processPurchase(products: Array<Product>) {
    let currentDateTime = formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0200');
    let productString = '';

    products.forEach(element => {
      productString += element.name + ' x' + element.quantity + ',';
    });
    let totalPrice = products.reduce(function(a, b) { return a + b.price * b.quantity; }, 0);

    this.purchaseService.addPurchase(new Purchase(currentDateTime, productString.substring(0, productString.length - 1), totalPrice));
  }
}
