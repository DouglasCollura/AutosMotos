import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MiTiendaComponent } from './mi-tienda.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    MiTiendaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    CarouselModule
  ]
})
export class MiTiendaModule { }
