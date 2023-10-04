import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JsonService {

    apiUrl: string = "";
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) {
        this.apiUrl = '/assets/json/data.json';
    }

    getData(): Observable<any> {
        return this.http.get<any>(this.apiUrl)
    }
}
