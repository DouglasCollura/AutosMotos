import { Component, OnInit } from '@angular/core';
import { MechanicService } from 'src/app/services/ads/mechanic/mechanic.service';
declare var $: any;

@Component({
    selector: 'app-talleres',
    templateUrl: './talleres.component.html',
    styleUrls: ['./talleres.component.scss']
})
export class TalleresComponent implements OnInit {

    constructor(
        private MechanicService:MechanicService
    ) { }

    ngOnInit(): void {
        this.MechanicService.Get().then(res=>{
            console.log(res.data.data)
            this.talleres = res.data.data
        })
    }


    talleres:any;


    GoPage(web:any){
        window.open(web, "_blank");
    }

    GoToWts(phone:any){
        window.open('https://api.whatsapp.com/send?phone='+phone, "_blank");
    }

    SelectMark(item:any, ev:any){
        console.log(item)
        let type="";
        let id="";
        let id_ad="";
        let marks=[];

        type=item?.type;
        id=item?.mechanic_ad.id
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
