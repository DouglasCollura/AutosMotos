import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads/ads.service';
import { MechanicService } from 'src/app/services/ads/mechanic/mechanic.service';
import { ShopService } from 'src/app/services/ads/shop/shop.service';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { Router } from '@angular/router';
import { TruckService } from 'src/app/services/ads/truck/truck.service';

@Component({
    selector: 'app-deseos',
    templateUrl: './deseos.component.html',
    styleUrls: ['./deseos.component.scss']
})
export class DeseosComponent implements OnInit {

    constructor(
        private AutosService:AutosService,
        private router: Router,
        private AdsService:AdsService,
        private MechanicService:MechanicService,
        private ShopService:ShopService,
        private TruckService:TruckService
    ) { }

    ngOnInit(): void {
        this.marks=JSON.parse(localStorage.getItem("marks") || '{}' )

        this.marks.forEach( (element:any) => {
            console.log(element.type)
            if(element.type == 'auto'){
                this.AutosService.GetById(element.id).then(res=>{
                    console.log(res.data.data[0])
                    this.autos.push(res.data.data[0]);

                })
            }

            if(element.type == 'truck'){
                this.TruckService.GetById(element.id_ad).then(res=>{

                    this.autos.push(res.data.data[0]);

                })
            }
            
        })

    }


    marks:any=[]
    autos:any=[]
    mechanic:any=[]
    shop:any=[]



    CargarThumb(foto:any){
        if(foto.includes("http")){
            return foto
        }else{
            return 'https://cdn.autosmotos.es/'+foto
        }
    }
}
