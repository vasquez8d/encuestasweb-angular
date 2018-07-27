import { Component, OnInit } from '@angular/core';
import { EncuestadorasService } from '../../services/encuestadoras.service';
import { EncuestasService } from '../../services/encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  listUltimasEncuestas = [];
  listPaginador = [];

  constructor(private encuestasService: EncuestasService) { }

  ngOnInit() {
    const bodyInitial = {
      limit: '3',
      offset: '0'
    };
    this.listarUltimasEncuestas(bodyInitial);
    this.obtenerNumeroEncuestas();
  }

  listarUltimasEncuestas(bodyInitial) {
    this.encuestasService.listarEncuestas(bodyInitial).subscribe(
      data => {
        this.listUltimasEncuestas = data.data_result;
      }
    );
  }

  obtenerNumeroEncuestas() {
    const body = {
      limit: '100',
      offset: '0'
    };
    this.encuestasService.listarEncuestas(body).subscribe(
      data => {
        const numeroRegistros = data.data_result.length;
        const numeroPaginas = Math.ceil(( numeroRegistros / 3));
        let iniOffset = 0;
        for (let i = 1; i <= numeroPaginas; i++) {
          const page1 = {
            number: i,
            limit: '3',
            offset: iniOffset
          };
          iniOffset = iniOffset + 3;
          this.listPaginador.push(page1);
        }
      }
    );
  }

  paginatorClick(page) {
    this.listarUltimasEncuestas(page);
    const elmnt = document.getElementById('tittle_encuestas');
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }
}
