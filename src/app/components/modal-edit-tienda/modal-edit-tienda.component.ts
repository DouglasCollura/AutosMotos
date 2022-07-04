import { Component, OnInit } from '@angular/core';
import { ModalEditTiendaService } from './modal-edit-tienda.service';

@Component({
  selector: 'app-modal-edit-tienda',
  templateUrl: './modal-edit-tienda.component.html',
  styleUrls: ['./modal-edit-tienda.component.scss']
})
export class ModalEditTiendaComponent implements OnInit {

  constructor(
    private ModalEditTiendaService:ModalEditTiendaService
  ) { }

  modal=false;
  negocio:any=[];

  ngOnInit(): void {
    this.ModalEditTiendaService.change.subscribe(res=>{
      this.modal = res.isOpen;
      this.negocio = res.negocio;
    })
    this.ModalEditTiendaService.run.subscribe(res=>this.modal = res)
  }

  // CIERRA MODAL
  close(){
    this.ModalEditTiendaService.onRun()
  }

}
