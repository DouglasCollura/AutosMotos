import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from '../../buyer/buyer.component';
import { LayoutComponent } from '../../layout/layout.component';
import { InicioComponent } from '../inicio/inicio.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
    {
        path: '',
        component: BuyerComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }
