import { Injectable } from '@angular/core';
import { ServicesConfig } from '../config/services.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { Observable, of, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  private urlListaEncuestas = `${this.globalValues.urlEncuestas()}/ultimos`;
  private urlDetalleEncuesta = `${this.globalValues.urlEncuestas()}/details`;
  private httpOptions;
  constructor(
    private httpClient: HttpClient,
    private globalValues: ServicesConfig
  ) { }

  listarEncuestas(body): Observable<ResponseModel> {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.httpClient.post<ResponseModel>(this.urlListaEncuestas , body, this.httpOptions).pipe(
      tap((response: ResponseModel) => this.log(`Resultado del listarEncuestas = ${response.res_service}`)),
      catchError(this.handleError<ResponseModel>('payment listarEncuestas'))
    );
  }

  obtenerDetalleEncuesta(encs_id): Observable<ResponseModel> {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.get<ResponseModel>(this.urlDetalleEncuesta + '/' + encs_id, this.httpOptions).pipe(
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
