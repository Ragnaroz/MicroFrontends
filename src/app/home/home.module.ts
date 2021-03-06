import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/home/routes/routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
