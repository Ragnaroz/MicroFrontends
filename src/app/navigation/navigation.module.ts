import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationHeaderComponent]
})
export class NavigationModule { }
