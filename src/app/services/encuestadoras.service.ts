import { Injectable } from '@angular/core';
import { ServicesConfig } from '../config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { Observable, of, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EncuestadorasService {

    private urlListadoEncuestadoras = `${this.globalValues.urlEncuestadoras()}/list`;
    private urlDetalleEncuestadoras = `${this.globalValues.urlEncuestadoras()}/details`;
    private httpOptions;
    constructor(
        private httpClient: HttpClient,
        private globalValues: ServicesConfig
    ) { }

    listaEncuestadoras(): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlListadoEncuestadoras, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listaEncuestadoras = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listaEncuestadoras'))
        );
    }

    detalleEncuestadora(encu_id): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlDetalleEncuestadoras + '/' + encu_id, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listaEncuestadoras = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listaEncuestadoras'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log('UserService: ' + message);
    }
}
