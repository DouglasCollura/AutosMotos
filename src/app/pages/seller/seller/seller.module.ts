import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SellerComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    CarouselModule,
    ComponentsModule,
  ],
  exports:[
  ]
})
export class SellerModule { }
