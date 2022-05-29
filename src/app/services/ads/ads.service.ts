import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdsService {

    constructor(
        private http: HttpClient,
    ) { }

    url = environment.serverUrl;

    Get(): Promise<any> {
        const send = this.http.get(`${this.url}ads`).toPromise()
        return send;
    }

    GetUltimos(): Promise<any> {
        const send = this.http.get(`${this.url}ads?orderBy=id&orderDirection=desc&per_page=15`).toPromise()
        return send;
    }

    

    GetById(id:string): Promise<any> {
        const send = this.http.get(`${this.url}ads?filters[id]=${id}`).toPromise()
        return send;
    }
}
