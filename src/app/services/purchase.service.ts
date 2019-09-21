import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase';

@Injectable()
export class PurchaseService {

  purchaseList: Array<Purchase> = [];
  
  constructor() { }

  addPurchase(purchase: Purchase) {
    this.purchaseList.unshift(purchase);
    console.log(this.purchaseList);
  }

  getPurchases() {
    return this.purchaseList;
  }
}
