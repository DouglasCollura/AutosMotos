import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { CompraComponent } from './compra/compra.component';
import { TalleresComponent } from './talleres/talleres.component';
import { ComprarComponent } from './comprar/comprar.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { RecambioComponent } from './recambio/recambio.component';
import { DeseosComponent } from './deseos/deseos.component';

@NgModule({
    declarations: [
        BuyerComponent,
        CompraComponent,
        TalleresComponent,
        ComprarComponent,
        AlquilerComponent,
        RecambioComponent,
        ComprarComponent,
        DeseosComponent
    ],
    imports: [
        CommonModule,
        BuyerRoutingModule,
        FormsModule,
    ]
})
export class BuyerModule { }
