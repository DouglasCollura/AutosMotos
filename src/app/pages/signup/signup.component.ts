import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup/signup.service';
import { Router} from '@angular/router';
import { Vacio, VacioU, SoloLetra, SoloNumero } from '../../../assets/script/general';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(
        private SignupService:SignupService,
        private router: Router,

    ) { }

    ngOnInit(): void {
    }


    usuario:any={
        type:'ocasional',
        first_name:null,
        last_name:null,
        mobile_number:null,
        whatsapp_number:null,
        email:null,
        password_confirmation:null,
        password:null
    }   

    display_reg:boolean=false;
    loading:boolean=false;
    error:number=0;

    OpenOcasional(){
        this.display_reg = true;
    }

    SignUp(){
        this.error=0;
        if(Vacio(this.usuario)){
            this.error=1;
            return
        }
        this.loading=true;
        this.SignupService.SignUp(this.usuario).then(res=>{
            this.loading = false;
            this.router.navigate(['../login'])
        }).catch(res=>{

            if(res.error.errors?.password){
                this.error=2
            }
            console.log(res.error.errors)
        });
    }

    Vacio(data:any){
        return Vacio(data)
    }

    VacioU(data:any){
        return VacioU(data)
    }

    SoloLetra(data:any){
        return SoloLetra(data)
    }

    SoloNumero(data:any){
        return SoloNumero(data)
    }
}
