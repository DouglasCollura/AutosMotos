import { Component, OnInit } from '@angular/core';
import { CompararService } from 'src/app/services/comparar/comparar.service';
import { ShowVehicleService } from 'src/app/services/show_vehicle/show-vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TruckService } from 'src/app/services/ads/truck/truck.service';
import { AutosService } from 'src/app/services/ads/autos/autos.service';
import { VacioU } from 'src/assets/script/general';
// import 'rxjs/add/operator/filter';

// ! ASSETS ============================================
declare var $: any;
@Component({
    selector: 'app-compra',
    templateUrl: './compra.component.html',
    styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

    constructor(
        private CompararService:CompararService,
        private ShowVehicleService:ShowVehicleService,
        private router: Router,
        private rutaActiva: ActivatedRoute,
        private TruckService:TruckService,
        private AutosService:AutosService
    ) { }

    ngOnInit(): void {


        this.rutaActiva.queryParams
        .subscribe((params:any) => {
            console.log(params); // { order: "popular" }

            if(!VacioU(params.id_maker)){
                this.filtro+='filters[make_id]='+params.id_maker+'&'
            }
            if(!VacioU(params.id_model)){
                this.filtro+='filters[model_id]='+params.id_model+'&'
            }

            if(params.type){
                if(params.type == 'auto'){
                    this.GetAutos(this.filtro)
                }
                if(params.type == 'truck'){
                    this.GetTruck(this.filtro)
                }
            }
        })
        // if(this.rutaActiva.snapshot.params['type']){
        //     this.type =this.rutaActiva.snapshot.params['type']
        //     console.log(this.rutaActiva.snapshot.params['type'])
        //     if(this.type == 'auto'){
        //         this.GetAutos()
        //     }
        //     if(this.type == 'truck'){
        //         this.TruckService.Get().then(res=>{
        //             console.log(res.data.data)
        //             this.res = res.data.data
        //         })
        //     }
            
        // }else{
        //     this.GetAutos()
        // }

    }

    //!DATA=====================================================================
    //?CARGA===================================================================================
    res:any=[];
    type:string="";
    //?GESTION===================================================================================
    filtro:string="";

    //?CONTROL===================================================================================

    
    //!FUNCIONES=============================================================

    //?CARGA=============================================================
    GetAutos(filtro:any){

        this.AutosService.GetAutos(filtro).then((res:any)=>{
            this.res = res.data.data;
            console.log(res)
        })
    }

    GetTruck(filtro:any){
        this.TruckService.Get(this.filtro).then(res=>{
            console.log(res.data.data)
            this.res = res.data.data
        })
    }

    //?GESTION============================================================
    GoShow(info:any){
        this.ShowVehicleService.SetInfo(info);
        this.router.navigate(['compra/comprar'],{queryParams: { id: info.id, id_ad:info.ad.id }})
    }
    
    //?CONTROL==============================================================================

    openComparar(){
        this.CompararService.toggle()
    }

    dropDown(id:any){
        if($("#"+id).hasClass("down") ){
            $("#"+id).removeClass("down")
        }else{
            $("#"+id).addClass("down")
        }

    }

}
