import { Injectable } from '@angular/core';
import { ServicesConfig } from '../config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { Observable, of, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PartidoPoliticoService {

    private urlListadoPartidoPolitico = `${this.globalValues.urlPartidoPolitico()}/list`;
    private httpOptions;
    constructor(
        private httpClient: HttpClient,
        private globalValues: ServicesConfig
    ) { }

    listarPartidoPolitico(): Observable<ResponseModel> {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.get<ResponseModel>(this.urlListadoPartidoPolitico, this.httpOptions).pipe(
            tap((response: ResponseModel) => this.log(`Resultado del servicio listarPartidoPolitico = ${response.res_service}`)),
            catchError(this.handleError<ResponseModel>('listarPartidoPolitico'))
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
