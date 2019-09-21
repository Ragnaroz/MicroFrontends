import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesPageComponent } from './purchases-page/purchases-page.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/purchases/routes/routes';

@NgModule({
  declarations: [PurchasesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PurchasesModule { }
