import { Component, OnInit } from '@angular/core';
import { ShowVehicleService } from 'src/app/services/show_vehicle/show-vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { AdsService } from 'src/app/services/ads/ads.service';
import {Location} from '@angular/common';
declare var $: any;


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

                    this.vehiculo = res.data.data[0];

                    this.AdsService.GetById(params.id_ad).then(res=>{

                        this.ads = res.data.data[0];
                        this.imagenes = this.ads.images
                        this.image_select =  this.CargarThumb(this.imagenes[0].path)
                    })
                })
            }
        })

    }



    vehiculo: any;
    ads:any
    imagenes:any;
    image_select:any;
    index:number=0;

    // !FUNCTION #################################################################

    // ?CARGA #################################################################



    // ?GESTION #################################################################

    SelectImg(ev:any){
        this.index = ev;
        $(".filter").css('display','none')
        console.log(this.index)
        let img = $('#'+ev).find('img')[0].src
       $('#'+ev).find('.filter').css('display','block')
        console.log(img)
        this.image_select = img
    }


    CargarThumb(foto:any){
        if(foto.includes("http")){
            return foto
        }else{
            return 'https://cdn.autosmotos.es/'+foto
        }
    }

    imgRight(){

        console.log(this.index)
        console.log("this.imagenes.lengt")
        console.log(this.imagenes.length)

        if(this.index< this.imagenes.length-1){
            $(".filter").css('display','none')

            this.index +=1;
            console.log(this.index)
            $('#'+this.index).find('.filter').css('display','block')
            let img = $('#'+(this.index)).find('img')[0];
            this.image_select = img.src;
            console.log(img.src)
        }
    }

    imgLeft(){
        console.log(this.index)
        console.log(this.imagenes.length)

        if(this.index>= 1){
            $(".filter").css('display','none')

            this.index -=1;
            console.log(this.index)
            $('#'+this.index).find('.filter').css('display','block')
            let img = $('#'+(this.index)).find('img')[0];
            this.image_select = img.src;
            console.log(img.src)
        }
    }


    // ?CONTROL #################################################################

    backClicked() {
        this._location.back();
    }

}
