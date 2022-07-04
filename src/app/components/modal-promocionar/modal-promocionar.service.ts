import { Injectable ,Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPromocionarService {

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  isOpen = false;

  toggle(articulo:number) {
    this.isOpen = !this.isOpen;
    this.change.emit({isOpen:this.isOpen, articulo:articulo});
  }

  onClose(){
    this.isOpen = !this.isOpen;
    this.close.emit(this.isOpen);
  }
}
