import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from '../../buyer/buyer.component';
import { LayoutComponent } from '../../layout/layout.component';
import { InicioComponent } from '../inicio/inicio.component';
import { SellerComponent } from './seller.component';
import { AnuncioComponent } from '../anuncio/anuncio.component';
import { AlquilerComponent } from '../alquiler/alquiler.component';
import { RecambiosComponent } from '../recambios/recambios.component';
import { RepuestosComponent } from '../repuestos/repuestos.component';

const routes: Routes = [
    {
        path: '',
        component: BuyerComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'anuncio',
        component: AnuncioComponent
    },
    {
        path: 'alquiler',
        component: AlquilerComponent
    },
    {
        path: 'recambios',
        component: RecambiosComponent
    },
    {
        path: 'repuestos',
        component: RepuestosComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }
