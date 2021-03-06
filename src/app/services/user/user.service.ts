import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,

    ) { }

    url = environment.serverUrl;

    SignUp(datos:any){
        const send = this.http.post(`${this.url}users`,datos).toPromise()
        return send;
    }

    LogIn(datos:any){
        const send = this.http.post(`${this.url}login`,datos).toPromise()
        return send;
    }

    SignUpDealer(datos:any){
        const send = this.http.post(`${this.url}dealers`,datos).toPromise()
        return send;
    }

    
    SignUpDealerShowRooms(datos:any){
        const send = this.http.post(`${this.url}dealer-show-rooms`,datos).toPromise()
        return send;
    }

}
