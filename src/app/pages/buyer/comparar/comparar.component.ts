import { Component, OnInit } from '@angular/core';
import { CompararService } from 'src/app/services/comparar/comparar.service';

@Component({
    selector: 'app-comparar',
    templateUrl: './comparar.component.html',
    styleUrls: ['./comparar.component.scss']
})
export class CompararComponent implements OnInit {

    constructor(
        private CompararService:CompararService
    ) { }

    ngOnInit(): void {
        this.CompararService.change.subscribe(res => {
            this.Display = res.isOpen;
        })
    }
    
    Display:boolean=false;

    Close(){
        this.CompararService.toggle()
    }

}
