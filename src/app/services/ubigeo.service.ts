import { Injectable } from '@angular/core';
import { ServicesConfig } from '../config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { Observable, of, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UbigeoService {

    private urlListaDepartamentos = `${this.globalValues.urlUbigeos()}/departamentos`;
    private urlListaProvincias = `${this.globalValues.urlUbigeos()}/provincias`;
    private urlListaDistritos = `${this.globalValues.urlUbigeos()}/distritos`;
    private httpOptions;

    constructor(
        private httpClient: HttpClient,
        private globalValues: ServicesConfig
    ) { }

    listarDepartamentos(): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlListaDepartamentos, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listarDepartamentos = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listarDepartamentos'))
        );
    }

    listarProvincias(ubg_dpt): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlListaProvincias + '/' + ubg_dpt, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listarProvincias = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listarProvincias'))
        );
    }

    listarDistritos(ubg_dpt, ubg_prv): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlListaDistritos + '/' + ubg_dpt + '/' + ubg_prv, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listarDistritos = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listarDistritos'))
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
