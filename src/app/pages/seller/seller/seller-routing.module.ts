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
import { SellerLayoutComponent } from '../../layout/seller-layout/seller-layout.component';
import { ResenasComponent } from '../resenas/resenas.component';
import { MiTiendaComponent } from '../mi-tienda/mi-tienda.component';
import { ImportacionComponent } from '../importacion/importacion.component';

const routes: Routes = [
    {
        path: '',
        component: SellerLayoutComponent,
        children:[
            {
                path:'',
                component: SellerComponent
            },
            {
                path: 'inicio',
                component: SellerComponent
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
            {
                path: 'resenas',
                component: ResenasComponent
            },
            {
                path: 'tienda',
                component: MiTiendaComponent
            },
            {
                path: 'importar',
                component: ImportacionComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }
