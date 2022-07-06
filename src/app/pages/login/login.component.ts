import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Vacio, VacioU, SoloLetra, SoloNumero } from '../../../assets/script/general';
import { Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private UserService:UserService,
        private router: Router,

    ) { }

    ngOnInit(): void {
    }

    loading:boolean=false;
    error:number=0;
    usuario:any={
        email:null,
        password:null
    }   

    LogIn(){
        if(Vacio(this.usuario)){
            this.error = 1;
            return
        }
        this.loading = true;
        this.UserService.LogIn(this.usuario).then(res=>{
            console.log(res)
            this.loading = false;
            this.router.navigate(['seller'])
        }).catch(err=>{
            console.log(err.error.error)
            if(err.error.error=='invalid_credentials'){
                this.error=2;
            }
            this.loading = false;

        });
    }

}
