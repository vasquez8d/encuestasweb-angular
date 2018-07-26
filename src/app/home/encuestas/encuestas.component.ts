import { Component, OnInit } from '@angular/core';
import { EncuestadorasService } from '../../services/encuestadoras.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  listEncuestadoras = [];
  listUltimasEncuestas = [];
  constructor(private encuestadoraService: EncuestadorasService) { }

  ngOnInit() {
    this.listarEncuestadoras();
  }

  listarEncuestadoras() {
    this.encuestadoraService.listaEncuestadoras().subscribe(
      data => {
        this.listEncuestadoras = data.data_result;
      }
    );
  }
}
