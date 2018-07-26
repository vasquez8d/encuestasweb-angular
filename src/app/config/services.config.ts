
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesConfig {

    // private ServerUrl = 'https://circularservices.herokuapp.com';
    private ServerUrl = 'http://localhost:1337';

    // private publishUrl = 'https://www.circular.pe/';
    // private publishUrl = 'http://localhost:4200/';

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
}
