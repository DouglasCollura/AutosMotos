import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/ads/rental/rental.service';
// ! ASSETS ============================================
declare var $: any;


@Component({
    selector: 'app-alquiler',
    templateUrl: './alquiler.component.html',
    styleUrls: ['./alquiler.component.scss']
})
export class AlquilerComponent implements OnInit {

    constructor(
        private RentalService:RentalService
    ) { }

    ngOnInit(): void {
        this.Get()
    }

    rentals:any=[]


    Get(){
        this.RentalService.Get().then(res=>{
            console.log(res.data)
            this.rentals = res.data.data
        })
    }

    onImgError(event:any){
        event.target.src = '../../../assets/img/logo.svg'
       //Do other stuff with the event.target
    }

}
