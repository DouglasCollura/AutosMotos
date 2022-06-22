import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/services/ads/ads.service';
import { MechanicService } from 'src/app/services/ads/mechanic/mechanic.service';
import { ShopService } from 'src/app/services/ads/shop/shop.service';
import { PaisService } from 'src/app/services/pais/pais.service';

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
        private ShopService:ShopService,
        private PaisService:PaisService
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

        this.PaisService.Markets().then( (res:any)=>{
            console.log(res.data.data)
            this.paises = res.data.data
        })
    }

    //!DATA===========================================================================================================
    //?CARGA=================================================================================
    ads_auto:any;
    marcas:any;
    modelos:any;
    paises:any=[];
    ultimos:any;
    talleres:any;
    recambios:any;
    //?GESTION=================================================================================
    type:string='auto';
    marca:string="";
    modelo:any;
    pais:any="";
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
                queryParams: { type: this.type, id_maker:this.marca, id_model:this.modelo, country: this.pais } 
            }
        );
    }

    //?CONTROL=================================================================================
    GoShow(id:any,id_ad:any){
        console.log(id)
        // this.ShowVehicleService.SetInfo(info);
        this.router.navigate(['compra/comprar'],{queryParams: { id: id, id_ad:id_ad }})
    }

    CargarThumb(foto:any){
        if(foto.includes("http")){
            return foto
        }else{
            return 'https://cdn.autosmotos.es/'+foto
        }
    }

    SelectMark(item:any){
        console.log(item)
        let type="";
        let id="";
        let id_ad="";
        let marks=[];
        if(item?.type){
            type=item?.type;
            id_ad=item?.id
            // console.log('type: ',item?.type)
            // console.log('id: ',item?.id)
            if(item?.type == 'auto'){
                id=item?.auto_ad.id
                // console.log('id_ad',item?.auto_ad.id)
            }
            if(item?.type == 'truck'){
                id=item?.truck_ad.id
                // console.log('id_ad',item?.truck_ad.id)
            }
            if(item?.type == 'mechanic'){
                id=item?.mechanic_ad.id
                // console.log('id_ad',item?.mechanic_ad.id)
            }
        }else{

            if(item?.ad?.type){
                // console.log('type: ',item?.ad?.type)
                // console.log('id: ',item?.id)
                // console.log('id_ad',item?.ad.id)
                type=item?.ad?.type;
                id=item?.id
                id_ad=item?.ad.id

            }else{
                console.log("asd")
            }
        }

        console.log(type,id,id_ad)
        if(localStorage.getItem("marks")){
            marks=JSON.parse(localStorage.getItem("marks") || '{}' )
        }
        
        marks.push({type:type,id:id,id_ad:id_ad})
        console.log(marks)
        localStorage.setItem('marks', JSON.stringify(marks));
        
    }

}
