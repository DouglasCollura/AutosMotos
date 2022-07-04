import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalEditTiendaService } from 'src/app/components/modal-edit-tienda/modal-edit-tienda.service';
import { ModalPromocionarService } from 'src/app/components/modal-promocionar/modal-promocionar.service';
import { ModalSuccessService } from 'src/app/components/modals-success/modal-success.service';
import { ModalsService } from 'src/app/components/modals/modals.service';

@Component({
  selector: 'app-mi-tienda',
  templateUrl: './mi-tienda.component.html',
  styleUrls: ['./mi-tienda.component.scss']
})
export class MiTiendaComponent implements OnInit {

  constructor(
    private ModalEditTiendaService:ModalEditTiendaService,
    private ModalSuccessService:ModalSuccessService,
    private ModalPromocionarService:ModalPromocionarService,
    private ModalsService:ModalsService
  ) { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1
        },
        400: {
        items: 2
        },
        740: {
        items: 3
        },
        940: {
        items: 4
        }
    },
  }
  customOptionsresena: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1
        },
        400: {
        items: 2
        },
        740: {
        items: 3
        },
    },
  }

  // EDITAR NEGOCIO
  edit(){
    this.ModalEditTiendaService.toggle([{negocio:'hola'}])
  }

  // PROMOCIONAR NEGOCIO - ENVIAR ID DEL NEGOCIO
  promocionar(articulo:number){
    this.ModalPromocionarService.toggle(articulo)
  }

  // LANZA MODAL DESPUES DE HABERSE PROMOCIONADO EL NEGOCIO, RECICE TIPO Y TEXTO
  succesPromo(e:string){
    this.ModalSuccessService.toggle(1, e);
  }

  // CREAR PROMOCION
  crear(){
    this.ModalsService.toggle()
  }
}
