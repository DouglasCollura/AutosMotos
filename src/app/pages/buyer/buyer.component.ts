import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/services/ads/ads.service';
import { MechanicService } from 'src/app/services/ads/mechanic/mechanic.service';
import { ShopService } from 'src/app/services/ads/shop/shop.service';

declare var $: any;

@Component({
    selector: 'app-buyer',
    templateUrl: './buyer.component.html',
    styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

    constructor(
        private AutosService:AutosService,
        private router: Router,
        private AdsService:AdsService,
        private MechanicService:MechanicService,
        private ShopService:ShopService
    ) { }

    ngOnInit(): void {

        this.AdsService.GetUltimos().then(res=>{

            this.ultimos = res.data.data;

        })

        this.ShopService.Get().then(res=>{
            console.log("recambios")
            console.log(res.data.data)
            this.recambios = res.data.data;
        })

        this.MechanicService.Get().then(res=>{
            
            this.talleres = res.data.data;
        })

        this.AutosService.GetAutos('').then(res=>{
            this.ads_auto = res.data.data;
        })

        this.AutosService.Marcas(this.type).then(res=>{
            this.marcas = res.data.data;
        })

        this.AutosService.Pais().then(res=>{
            this.paises = res.data.data;
        })
    }

    //!DATA===========================================================================================================
    //?CARGA=================================================================================
    ads_auto:any;
    marcas:any;
    modelos:any;
    paises:any;
    ultimos:any;
    talleres:any;
    recambios:any;
    //?GESTION=================================================================================
    type:string='auto';
    marca:string="";
    modelo:any;

    //?CONTROL=================================================================================




    //!FUNCIONES===========================================================================================================
    //?CARGA=================================================================================



    //?GESTION=================================================================================

    ChangeType(type:string){
        this.type = type;
        this.marcas=[]
        this.AutosService.Marcas(type).then(res=>{
            this.marcas = res.data.data;
        })
    }
    

    FiltrarModelo(){
        console.log( this.marca )
        this.AutosService.Modelos(this.marca).then( (res:any)=>{
            this.modelos=res.data.data
        })
    }   

    Filtrar(){
        let fil=""
        this.router.navigate(
            ['/compra'],
            {
                queryParams: { type: this.type, id_maker:this.marca, id_model:this.modelo } 
            }
        );
    }

    //?CONTROL=================================================================================

    CargarThumb(foto:any){
        if(foto.includes("http")){
            return foto
        }else{
            return 'https://cdn.autosmotos.es/'+foto
        }
    }

}
