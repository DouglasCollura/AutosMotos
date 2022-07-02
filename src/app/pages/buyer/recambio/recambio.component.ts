import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/ads/shop/shop.service';
declare var $: any;
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recambio',
    templateUrl: './recambio.component.html',
    styleUrls: ['./recambio.component.scss']
})
export class RecambioComponent implements OnInit {

    constructor(
        private ShopService:ShopService,
        private router: Router,
        private rutaActiva: ActivatedRoute,
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


    SelectMark(item:any, ev:any){
        console.log(item)
        let type="";
        let id="";
        let id_ad="";
        let marks=[];

        type=item?.ad.type;
        id=item?.ad.id
        id_ad=item?.ad_id

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

    GoShow(info:any){
        // this.ShowVehicleService.SetInfo(info);
        this.router.navigate(['compra/comprar'],{queryParams: { id: info.id, id_ad:info.ad.id }})
    }

}
