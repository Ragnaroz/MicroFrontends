import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchases-page',
  templateUrl: './purchases-page.component.html',
  styleUrls: ['./purchases-page.component.sass']
})
export class PurchasesPageComponent implements OnInit {

  public purchases: Array<Purchase> = [];

  constructor(
    private purchaseService: PurchaseService
  ) { }

  ngOnInit() {
    this.purchases = this.purchaseService.getPurchases();
    let purchasesPageEle = document.querySelector('purchases-page');
      if(purchasesPageEle != null) {
        purchasesPageEle['message'] = this.purchases;
      }
  }

}
