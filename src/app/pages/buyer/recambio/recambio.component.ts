import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/ads/shop/shop.service';
ShopService
@Component({
    selector: 'app-recambio',
    templateUrl: './recambio.component.html',
    styleUrls: ['./recambio.component.scss']
})
export class RecambioComponent implements OnInit {

    constructor(
        private ShopService:ShopService
    ) { }

    ngOnInit(): void {
        console.log("asdasdasd")
        this.Get()
    }

    shops:any;

    Get(){
        this.ShopService.Get().then(res=>{
            console.log(res.data)
            this.shops = res.data.data
        })
    }

}
