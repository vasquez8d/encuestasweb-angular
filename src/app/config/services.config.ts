
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesConfig {

    private ServerUrl = 'https://encuestas-peru.herokuapp.com';
    // private ServerUrl = 'http://localhost:1337';

    urlCandidato() {
        return this.ServerUrl + '/candidato';
    }

    urlCandidatura() {
        return this.ServerUrl + '/candidatura';
    }

    urlUbigeos() {
        return this.ServerUrl + '/ubigeo';
    }

    urlPartidoPolitico() {
        return this.ServerUrl + '/ppolitico';
    }

    urlEncuestadoras() {
        return this.ServerUrl + '/encuestadora';
    }

    urlEncuestas() {
        return this.ServerUrl + '/encuesta';
    }
}
