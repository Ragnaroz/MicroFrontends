import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/products/routes/routes';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
