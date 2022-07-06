import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalsService } from 'src/app/components/modals/modals.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  constructor(
    private ModalsService:ModalsService
  ) { }

  ngOnInit(): void {
  }

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1
        },
        400: {
        items: 2
        },
        740: {
        items: 3
        },
        940: {
        items: 4
        }
    },
    }
    customOptionsresena: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
            items: 2
            },
            740: {
            items: 3
            },
        },
    }

    modalOpen(){
        this.ModalsService.toggle()
    }

}
