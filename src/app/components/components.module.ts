import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals/modals.component';
import { RouterModule } from '@angular/router';
import { ModalsSuccessComponent } from './modals-success/modals-success.component';
import { ModalEditTiendaComponent } from './modal-edit-tienda/modal-edit-tienda.component';
import { ModalPromocionarComponent } from './modal-promocionar/modal-promocionar.component';

@NgModule({
  declarations: [
    ModalsComponent,
    ModalsSuccessComponent,
    ModalEditTiendaComponent,
    ModalPromocionarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ModalsComponent,
    ModalsSuccessComponent,
    ModalEditTiendaComponent,
    ModalPromocionarComponent
  ]
})
export class ComponentsModule { }
