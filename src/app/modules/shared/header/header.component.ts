import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { EncuestadorasService } from '../../../services/encuestadoras.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listEncuestadoras = [];
  constructor(private encuestadoraService: EncuestadorasService,
              private router: Router) { }

  ngOnInit() {
    this.listarEncuestadoras();
  }

  listarEncuestadoras() {
    this.encuestadoraService.listaEncuestadoras().subscribe(
      data => {
        if (data.res_service === 'ok') {
          this.listEncuestadoras = data.data_result;
        }
      }
    );
  }

  navigateEncuestadora(encustadora) {
    this.router.navigateByUrl('mod/encuestas/encuestadoras/' + encustadora.encu_id + '/' + encustadora.encu_slug);
  }
}
