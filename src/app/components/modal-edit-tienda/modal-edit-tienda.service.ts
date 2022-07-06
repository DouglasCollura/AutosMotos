import { Injectable ,Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalEditTiendaService {

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() run: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  isOpen = false;

  // ABRE MODAL Y RECIBE INFORMACION DE LA TIENDA
  toggle(negocio:any) {
    this.isOpen = !this.isOpen;
    this.change.emit({isOpen:this.isOpen, negocio:negocio});
  }


  // ABRE Y CIERRA EL MODAL
  onRun(){
    this.isOpen = !this.isOpen;
    this.run.emit(this.isOpen)
  }

}
