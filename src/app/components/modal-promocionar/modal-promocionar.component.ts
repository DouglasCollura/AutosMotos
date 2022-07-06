import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalPromocionarService } from './modal-promocionar.service';

@Component({
  selector: 'app-modal-promocionar',
  templateUrl: './modal-promocionar.component.html',
  styleUrls: ['./modal-promocionar.component.scss']
})
export class ModalPromocionarComponent implements OnInit {

  @Output() success: EventEmitter<string> = new EventEmitter();

  constructor(
    private ModalPromocionarService:ModalPromocionarService
  ){}
  
  modal=false;
  articulo=Number;

  ngOnInit(): void {
    this.ModalPromocionarService.change.subscribe(res=>{
      this.modal = res.isOpen;
      this.articulo = res.articulo;
    })
    this.ModalPromocionarService.close.subscribe(close=>this.modal=close)
  }

  // CIERRA EL MODAL
  close(){
    this.ModalPromocionarService.onClose()
  }

  // EMITE RESPUESTA DE LA PROMOCION, RECIBE TEXTO 
  message='esto es una prueba del mensaje que se envia luego de promocionarse'
  emit(){
    this.close()
    this.success.emit(this.message)
  }
}
