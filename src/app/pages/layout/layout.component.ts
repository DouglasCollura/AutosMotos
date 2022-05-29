import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.router.events.pipe(
        //     filter(event => event instanceof NavigationEnd)
        //   ).subscribe((event:any) => {
        //      console.log('The URL changed to: ' + event['url'])
        //      if(event['url'] == '/landing' || event['url'] == '/login' || event['url'] == '/signup' || event['url'] == '/signup_pro'){
        //          this.display_menu = false;
        //      }else{
        //         this.display_menu = true;
        //         console.log(event)

        //      }
        //   });
    }

    display_menu:boolean=true;


    GoTo(route:string){
        // this.router.navigate([route])
        location.href=route
    }

}
