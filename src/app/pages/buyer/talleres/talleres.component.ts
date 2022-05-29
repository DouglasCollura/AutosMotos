import { Component, OnInit } from '@angular/core';
import { MechanicService } from 'src/app/services/ads/mechanic/mechanic.service';

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

}
