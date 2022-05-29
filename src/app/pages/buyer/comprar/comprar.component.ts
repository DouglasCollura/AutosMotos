import { Component, OnInit } from '@angular/core';
import { ShowVehicleService } from 'src/app/services/show_vehicle/show-vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { AdsService } from 'src/app/services/ads/ads.service';
import {Location} from '@angular/common';
@Component({
    selector: 'app-comprar',
    templateUrl: './comprar.component.html',
    styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

    constructor(
        private ShowVehicleService: ShowVehicleService,
        private rutaActiva: ActivatedRoute,
        private AutosService:AutosService,
        private AdsService:AdsService,
        private _location: Location
    ) { }

    ngOnInit(): void {

        this.rutaActiva.queryParams
        .subscribe((params:any) => {
            console.log(params); // { order: "popular" }
            if(params.id){
                this.AutosService.GetById(params.id).then(res=>{
                    console.log("auto ads")
                    console.log(res.data.data[0])
                    this.vehiculo = res.data.data[0];
                    this.AdsService.GetById(params.id_ad).then(res=>{
                        console.log("ads")
                        console.log(res.data.data[0])
                        this.ads = res.data.data[0];
                    })
                })
            }
        })

        // if(this.rutaActiva.snapshot.params['id']){
        //     console.log(this.rutaActiva.snapshot.params['id'])
        //     console.log(this.rutaActiva.snapshot.params['type'])

        //     if(this.rutaActiva.snapshot.params['type'] == 'auto'){
        //         this.AutosService.GetById(this.rutaActiva.snapshot.params['id']).then(res=>{
        //             console.log("auto ads")
        //             console.log(res.data.data[0])
        //             this.vehiculo = res.data.data[0];
        //             this.AdsService.GetById(res.data.data[0].ad.id).then(res=>{
        //                 console.log("ads")
        //                 console.log(res.data.data[0])
        //                 this.ads = res.data.data[0];
        //             })
        //         })
        //     }
        // }
    }

    backClicked() {
        this._location.back();
    }


    vehiculo: any;
    ads:any
}
