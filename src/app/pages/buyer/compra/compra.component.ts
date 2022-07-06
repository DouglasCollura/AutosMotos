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

        this.length_comparar = this.CompararService.vehiculos.length

        this.CompararService.arr.subscribe(()=>{
            this.length_comparar = 0;
            console.log($('.card-carousel-top-img').find('.btn-primary').removeClass('btn-primary').addClass('btn'))
        })

        this.rutaActiva.queryParams
        .subscribe((params:any) => {
            console.log(params); // { order: "popular" }

            if(!VacioU(params.id_maker)){
                this.filtro+='filters[make_id]='+params.id_maker+'&'
            }
            if(!VacioU(params.id_model)){
                this.filtro+='filters[model_id]='+params.id_model+'&'
            }
            if(!VacioU(params.country)){
                this.filtro+='filters[country]='+params.country+'&'
            }

            if(params.type){
                if(params.type == 'auto'){
                    let marks=JSON.parse(localStorage.getItem("marks") || '{}' )
                    this.marks=marks.filter((e:any)=>{ return e.type == 'auto' })
                    console.log(marks.filter((e:any)=>{ return e.type == 'auto' }))
                    this.GetAutos(this.filtro)
                }
                if(params.type == 'truck'){
                    let marks=JSON.parse(localStorage.getItem("marks") || '{}' )
                    this.marks=marks.filter((e:any)=>{ return e.type == 'truck' })
                    this.GetTruck(this.filtro)
                }
            }
        })

    }

    //!DATA=====================================================================
    //?CARGA===================================================================================
    res:any=[];
    type:string="";
    //?GESTION===================================================================================
    filtro:string="";
    length_comparar:number=0;
    marks:any;
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

    AddComparar(item:any, ev:any){
        console.log(item)
        console.log(this.CompararService.vehiculos.length)
        
        if($(ev.target).hasClass('btn-primary')){
            
        }else{
            if(this.CompararService.vehiculos.length <2){
                this.CompararService.vehiculos.push(item)
                this.length_comparar = this.CompararService.vehiculos.length
                $(ev.target).addClass('btn-primary')
                $(ev.target).removeClass('btn')
            }
        }

        
    }

    //?GESTION============================================================
    GoShow(info:any){
        this.ShowVehicleService.SetInfo(info);
        this.router.navigate(['compra/comprar'],{queryParams: { id: info.id, id_ad:info.ad.id }})
    }

    GoToWts(phone:any){
        window.open('https://api.whatsapp.com/send?phone='+phone, "_blank");
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

    SelectMark(item:any, ev:any){
        console.log(item)
        let type="";
        let id="";
        let id_ad="";
        let marks=[];
        if(item?.type){
            type=item?.type;
            id=item?.id
            // console.log('type: ',item?.type)
            // console.log('id: ',item?.id)
            if(item?.type == 'auto'){
                id_ad=item?.auto_ad.id
                // console.log('id_ad',item?.auto_ad.id)
            }
            if(item?.type == 'truck'){
                id_ad=item?.truck_ad.id
                // console.log('id_ad',item?.truck_ad.id)
            }
            if(item?.type == 'mechanic'){
                id_ad=item?.mechanic_ad.id
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
        
        console.log($('#btn'+ev))
        $('#btn'+ev).removeClass('btn-bookmark').addClass('btn-bookmark-primary')
        marks.push({type:type,id:id,id_ad:id_ad})
        $(ev.target)
        console.log(marks)
        localStorage.setItem('marks', JSON.stringify(marks));
        
    }

    filterMark(id:any){
        for (const key of this.marks) {
            if(key.id_ad == id){
                return true
            }
        }
        return false;
    }
}
