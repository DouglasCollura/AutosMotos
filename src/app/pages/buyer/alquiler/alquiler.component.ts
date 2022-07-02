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


    SelectMark(item:any, ev:any){
        console.log(item)
        let type="";
        let id="";
        let id_ad="";
        let marks=[];

        type=item?.type;
        id=item?.rental_ad.id
        id_ad=item?.id

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

}
