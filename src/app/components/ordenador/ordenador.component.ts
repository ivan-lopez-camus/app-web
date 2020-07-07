import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrdenadoresService} from '../../servicios/ordenadores.service';

@Component({
  selector: 'app-ordenador',
  templateUrl: './ordenador.component.html'
})
export class OrdenadorComponent {

  ordenador:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private _ordenadoresService: OrdenadoresService) {

    this.activatedRoute.params.subscribe(params =>{
        this.ordenador=this._ordenadoresService.getOrdenador(params ['id']);
    })

   }

}
