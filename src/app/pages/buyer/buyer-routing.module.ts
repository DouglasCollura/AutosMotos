import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { BuyerComponent } from './buyer.component';
import { CompraComponent } from './compra/compra.component';
import { ComprarComponent } from './comprar/comprar.component';
import { DeseosComponent } from './deseos/deseos.component';
import { RecambioComponent } from './recambio/recambio.component';
import { TalleresComponent } from './talleres/talleres.component';


const routes: Routes = [
    {
        path: '',
        component: BuyerComponent,
        children:[
            {
                path:'',
                component:BuyerComponent
            },
            
        ]
    },

    {
        path: 'compra',
        component: CompraComponent,
        
    },
    {
        path: 'compra/type/:type',
        component: CompraComponent,
        
    },
    {
        path: 'compra/comprar',
        component: ComprarComponent
    },
    
    {
        path: 'alquiler',
        component: AlquilerComponent
    },
    {
        path: 'deseos',
        component: DeseosComponent
    },
    {
        path: 'talleres',
        component: TalleresComponent
    },
    {
        path: 'recambio',
        component: RecambioComponent
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyerRoutingModule { }
