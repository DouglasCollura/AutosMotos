import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/components/modals/modals.service';

@Component({
    selector: 'app-seller-layout',
    templateUrl: './seller-layout.component.html',
    styleUrls: ['./seller-layout.component.scss']
})
export class SellerLayoutComponent implements OnInit {

    constructor(
        private ModalsService:ModalsService
    ) { }

    ngOnInit(): void {
    }


    main=false;
    
    modal(){
        this.ModalsService.toggle()
    }
}
